import { Routes } from '@angular/router';
import { TrackListComponent } from './pages/track-list/track-list.component';
import { TrackDetailsComponent } from './pages/track-details/track-details.component';

export const routes: Routes = [


    {
        path: '',
        redirectTo: 'tracks',
        pathMatch: 'full'
    },
    {
        path: 'tracks',
        component: TrackListComponent
    },
    {
        path: 'tracks/:id',
        component: TrackDetailsComponent
      }
];
