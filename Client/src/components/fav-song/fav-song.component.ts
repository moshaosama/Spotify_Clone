import { Component, inject } from '@angular/core';
import { FavSongService } from '../../Services/fav-song.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormFavSongComponent } from './form-fav-song/form-fav-song.component';
import { AlbumsService } from '../../Services/albums.service';
import { HeaderAlbumComponent } from '../header-album/header-album.component';
import { libraryService } from '../../Services/library.service';

@Component({
  selector: 'app-fav-song',
  standalone: true,
  imports: [FormFavSongComponent, HeaderAlbumComponent],
  templateUrl: './fav-song.component.html',
  styleUrl: './fav-song.component.css',
})
export class FavSongComponent {
  favSongService = inject(FavSongService);
  router = inject(ActivatedRoute);
  albumService = inject(AlbumsService);
  libraryService = inject(libraryService);
  id: string = '';
  Activated = '';

  constructor() {
    this.router.paramMap.subscribe((params) => {
      this.id = params.get('id')?.toString()!;
    });
    this.favSongService.PlayListWithFavSong(this.id);
  }

  get PlayList() {
    return this.libraryService.playLists.filter((el) => {
      return el?.id === this.id;
    });
  }
  onClick() {
    console.log(this.favSongService.Result);
  }
  get Length() {
    return this.favSongService.Result;
  }
  get favSong() {
    return this.favSongService.favSongs.flatMap((el) => {
      return el?.data?.filter((el2) => {
        return el?.playList?.id === this.id;
      });
    });
  }
  setActive(button: string) {
    this.Activated = button;
  }
  onPostFavSong(name: string) {
    this.favSongService.postfavSong(name, this.id);
  }
  onPlayMusic(src: string) {
    this.albumService.playSound(src);
  }
  get ResultWithSong() {
    return this.favSongService.ResultListWithSong;
  }
}
