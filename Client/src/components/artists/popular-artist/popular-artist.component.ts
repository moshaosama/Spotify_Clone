import { Component, inject } from '@angular/core';
import { artistService } from '../../../Services/artist.service';
import { RouterLink } from '@angular/router';
import { AlbumsService } from '../../../Services/albums.service';

@Component({
  selector: 'app-popular-artist',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './popular-artist.component.html',
  styleUrl: './popular-artist.component.css',
})
export class PopularArtistComponent {
  artistService = inject(artistService);
  albumService = inject(AlbumsService);
  get Artist() {
    return this.artistService.Artists.map((el) => {
      return el;
    });
  }
  onChangeDB(id: string) {
    this.Artist.filter((el) => el?.id === id)?.map((el) => {
      this.albumService.onChangeDB(el.id);
    });
  }
}
