import { Component, inject, signal } from '@angular/core';
import { artistService } from '../../Services/artist.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AlbumsService } from '../../Services/albums.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  artistService = inject(artistService);
  albumService = inject(AlbumsService);
  routes = inject(ActivatedRoute);
  id = '';

  get Artist() {
    return this.artistService.Artists?.map((el) => {
      return el;
    });
  }
  onSubmit(id: string) {
    this.Artist?.filter((el) => el?.id === id)?.map((el) => {
      this.albumService.onChangeDB(el?.id);
    });
  }
}
