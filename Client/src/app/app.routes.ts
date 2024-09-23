import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';

import { LoginComponent } from '../components/login/login.component';
import { ArtistsComponent } from '../components/artists/artists.component';
import { AlbumsComponent } from '../components/albums/albums.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },

  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'Artists',
    component: ArtistsComponent,
  },
  {
    path: 'Album/:id',
    component: AlbumsComponent,
  },
];
