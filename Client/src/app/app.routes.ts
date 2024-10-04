import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';

import { LoginComponent } from '../components/login/login.component';
import { ArtistsComponent } from '../components/artists/artists.component';
import { AlbumsComponent } from '../components/albums/albums.component';
import { PlaylstComponent } from '../components/play-lists/playlst/playlst.component';
import { FormPlaylistComponent } from '../components/play-lists/form-playlist/form-playlist.component';
import { FavSongComponent } from '../components/fav-song/fav-song.component';

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
    children: [
      {
        path: 'formFavSong',
        component: AlbumsComponent,
      },
    ],
  },
  {
    path: 'playlist',
    component: PlaylstComponent,
    children: [
      {
        path: 'form',
        component: PlaylstComponent,
      },
    ],
  },
  {
    path: 'favSong/:id',
    component: FavSongComponent,
  },
];
