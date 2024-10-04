import { Component, inject } from '@angular/core';
import { AlbumsService } from '../../Services/albums.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { artistService } from '../../Services/artist.service';
import { FormFavSongComponent } from '../fav-song/form-fav-song/form-fav-song.component';
import { HeaderAlbumComponent } from "../header-album/header-album.component";

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [FormFavSongComponent, RouterLink, HeaderAlbumComponent],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css',
})
export class AlbumsComponent {
  //Dependance Injection
  albumService = inject(AlbumsService);
  artistService = inject(artistService);
  routes = inject(ActivatedRoute);
  Router = inject(Router);
  //Variables
  activeButton: string = '';
  id: string = '';
  name: string = '';
  //Methods Service
  get Albums() {
    return this.albumService.Albums.map((el) => {
      return el;
    });
  }
  get Artist() {
    this.routes.paramMap.subscribe((params) => {
      this.id = params.get('id')!;
    });

    return this.artistService.Artists.filter((el) => el?.id === this.id);
  }
  playSound(src: string) {
    this.albumService.playSound(src);
  }
  getSong(id: string) {
    return this.albumService.getSong(id);
  }
  //Methods without Service

  setActive(button: string) {
    this.activeButton = button;
  }
  isFormFavSong(): boolean {
    return this.Router.url === `/Album/${this.id}/formFavSong`;
  }
  onCLick(Name: string) {
    this.albumService.onCLick(Name);
  }
}
