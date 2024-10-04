import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import {
  albumData,
  favSong,
  favSongData,
  PlayListWithSong,
} from '../interfaces';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class FavSongService {
  httpClient = inject(HttpClient);
  favSongs: favSongData[] = [];
  Result: number = 0;
  ResultListWithSong: number = 0;
  id: string = '';
  constructor() {
    this.httpClient.get<favSong>('http://localhost:4000/favSong').subscribe({
      next: (val) => {
        val?.data?.map((el: favSongData) => {
          return this.favSongs.push(el);
        });
        this.Result = val?.results;
      },
    });
  }
  postfavSong(name: string, id: string) {
    this.httpClient
      .post(`http://localhost:4000/favSong/${name}/${id}`, {
        Headers: { 'Content-Type': 'application/json' },
      })
      .subscribe({
        next: (val) => console.log(val),
      });
  }
  PlayListWithFavSong(id: string) {
    this.httpClient
      .get<PlayListWithSong>(`http://localhost:4000/favSong/Playlist/${id}`)
      .subscribe({
        next: (val) => {
          this.ResultListWithSong = val.results;
        },
      });
  }
}
