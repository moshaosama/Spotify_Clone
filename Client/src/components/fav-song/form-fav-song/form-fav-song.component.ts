import { Component, inject } from '@angular/core';
import { libraryService } from '../../../Services/library.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FavSongService } from '../../../Services/fav-song.service';
import { AlbumsService } from '../../../Services/albums.service';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-form-fav-song',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './form-fav-song.component.html',
  styleUrl: './form-fav-song.component.css',
})
export class FormFavSongComponent {
  playListService = inject(libraryService);
  favSongService = inject(FavSongService);
  albumService = inject(AlbumsService);
  routes = inject(ActivatedRoute);
  User = JSON.parse(window.localStorage.getItem('user')!);
  id: string = '';
  constructor() {
    this.routes.paramMap.subscribe((params) => {
      this.id = params.get('id')!;
    });
  }

  get PlayLists() {
    return this.playListService.playLists?.map((el) => {
      return el;
    });
  }

  postFavSong(id: string) {
    this.favSongService.postfavSong(this.albumService.name, id);
    console.log(id);
  }
}
