import { Component, inject } from '@angular/core';
import { AlbumsService } from '../../../Services/albums.service';

@Component({
  selector: 'app-popularity-album',
  standalone: true,
  imports: [],
  templateUrl: './popularity-album.component.html',
  styleUrl: './popularity-album.component.css',
})
export class PopularityAlbumComponent {
  albumService = inject(AlbumsService);

  constructor() {
    console.log(this.albumService.Albums);
  }
}
