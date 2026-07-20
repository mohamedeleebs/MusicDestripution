import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

import { TrackService } from '../../core/services/track.service';
import { TrackDetails } from '../../core/models/TrackDetails';
import { TrackStatus } from '../../core/models/track';

import { Location } from '@angular/common';




@Component({
  selector: 'app-track-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './track-details.component.html',
  styleUrl: './track-details.component.css'
})
export class TrackDetailsComponent implements OnInit {

  constructor(private location: Location) {}
  private route = inject(ActivatedRoute);
  private trackService = inject(TrackService);

  track?: TrackDetails;

  ngOnInit(): void {

    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.trackService.getTrack(id).subscribe({
      next: res => this.track = res,
      error: err => console.error(err)
    });

  }

  getStatusName(status: number): string {
    return TrackStatus[status];
  }
  goBack() {
    this.location.back();
  }

}