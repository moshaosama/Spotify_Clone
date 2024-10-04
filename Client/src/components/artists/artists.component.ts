import { Component, inject, OnInit } from '@angular/core';
import { artistService } from '../../Services/artist.service';
import { FooterComponent } from '../../pages/footer/footer.component';
import { RouterLink } from '@angular/router';
import { AlbumsService } from '../../Services/albums.service';

@Component({
  selector: 'app-artists',
  standalone: true,
  imports: [FooterComponent, RouterLink],
  templateUrl: './artists.component.html',
  styleUrl: './artists.component.css',
})
export class ArtistsComponent {
  artistService = inject(artistService);
  albumService = inject(AlbumsService);
  // ngOnInit() {
  //   this.artistService.getArtist();
  // }

  get Artists() {
    return this.artistService.Artists?.map((el) => {
      return el;
    });
  }
  onEnterAlbums(id: string) {
    this.artistService.Artists?.filter((el) => el?.id === id)?.map((el) => {
      this.albumService.onChangeDB(el?.id);
    });
  }
}
