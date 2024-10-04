import { Component, inject, signal } from '@angular/core';
import { artistService } from '../../Services/artist.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AlbumsService } from '../../Services/albums.service';
import { PopularArtistComponent } from '../artists/popular-artist/popular-artist.component';
import { PopularityAlbumComponent } from '../albums/popularity-album/popularity-album.component';
import { PlayListsComponent } from '../play-lists/play-lists.component';
import { libraryService } from '../../Services/library.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    PopularArtistComponent,
    PopularityAlbumComponent,
    PlayListsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  User = JSON.parse(window.localStorage.getItem('user')!);
  playListService = inject(libraryService);

  Token = window.localStorage.getItem('Token');

  get PlayLists() {
    return this.playListService.playLists?.map((el) => {
      return el;
    });
  }
}
