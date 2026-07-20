import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { Track } from '../../core/models/track';
import { TrackService } from '../../core/services/track.service';
import { TrackStatus } from '../../core/models/track';

@Component({
  selector: 'app-track-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './track-list.component.html',
  styleUrl: './track-list.component.css'
})
export class TrackListComponent implements OnInit {

  private trackService = inject(TrackService);
  private router = inject(Router);

  tracks: Track[] = [];

  selectedStatus: number | null = null;

  loading = false;

  error = '';

  ngOnInit(): void {
    this.loadTracks();
  }

  loadTracks() {

    this.loading = true;
    this.error = '';

    const request =
      this.selectedStatus === null
        ? this.trackService.getTracks()
        : this.trackService.getTracksByStatus(this.selectedStatus);

    request.subscribe({

      next: res => {
        this.tracks = res;
        this.loading = false;
      },

      error: err => {
        console.error(err);
        this.error = 'Unable to load tracks.';
        this.loading = false;
      }

    });

  }

  viewDetails(id: number) {
    this.router.navigate(['/tracks', id]);
  }

  getStatusName(status: number): string {
    return TrackStatus[status];
  }

  getBadgeClass(status: number): string {

    switch (status) {

      case TrackStatus.Draft:
        return 'bg-secondary';

      case TrackStatus.Submitted:
        return 'bg-warning text-dark';

      case TrackStatus.Distributed:
        return 'bg-success';

      default:
        return 'bg-dark';

    }

  }

}