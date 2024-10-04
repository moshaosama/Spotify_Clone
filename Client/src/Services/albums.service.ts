import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Album, albumData } from '../interfaces';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AlbumsService {
  // Dependency injection
  httpClient = inject(HttpClient);
  routes = inject(ActivatedRoute);
  // Variables
  public Albums: albumData[] = [];
  name: string = '';
  progress_Bar = 0;
  activeButton: string = '';
  Song: albumData[] | null = null;
  private currentAudio: HTMLAudioElement | null = null;
  audio = new Audio();
  nameSong: string = '';
  // Methods
  constructor() {
    this.httpClient.get<Album>('http://localhost:4000/Album').subscribe({
      next: (val) => {
        val?.data?.map((el) => {
          el?.data?.map((el2) => {
            el2?.tracks?.map((el3) => {
              this.Albums.push(el3);
            });
          });
        });
      },
    });
  }
  onChangeDB(id: string) {
    this.httpClient.get(`http://localhost:4000/Album/${id}`).subscribe({
      next: (val) => {
        console.log(val);
        window.location.reload();
      },
    });
  }
  getSong(id: string) {
    this.Song = this.Albums?.filter((el) => el.id === id);
  }
  playSound(src: string) {
    if (this.currentAudio) {
      this.currentAudio.pause();
      this.currentAudio.currentTime = 0;
    }
    this.audio.src = src;
    this.audio.load();
    this.audio.play();

    this.currentAudio = this.audio;
  }
  PauseSong() {
    this.audio.pause();
  }
  playSong(src: string) {
    this.audio.play();
  }
  onCLick(Name: string) {
    this.name = Name;
  }
}
