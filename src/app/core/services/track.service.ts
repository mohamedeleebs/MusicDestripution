import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Track } from '../models/track';
import { TrackDetails } from '../models/TrackDetails';

@Injectable({
  providedIn: 'root'
})
export class TrackService {
  private http = inject(HttpClient);


  private apiUrl = `http://localhost:5204/api/Tracks`;

  getTracks(): Observable<Track[]> {
    return this.http.get<Track[]>(this.apiUrl);
  }

  getTrack(id: number): Observable<TrackDetails> {
    return this.http.get<TrackDetails>(`${this.apiUrl}/${id}`);
  }

  getTracksByStatus(status: number): Observable<Track[]> {
    return this.http.get<Track[]>(`${this.apiUrl}?status=${status}`);
  }

  getTracksByArtist(artistId: number): Observable<Track[]> {
    return this.http.get<Track[]>(`${this.apiUrl}?artistId=${artistId}`);
  }
}
