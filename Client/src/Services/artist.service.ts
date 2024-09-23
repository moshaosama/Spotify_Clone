import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Artist, artistDATA } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class artistService {
  httpClient = inject(HttpClient);
  Artists: artistDATA[] = [];

  constructor() {
    this.httpClient.get<Artist>('http://localhost:4000/Artist').subscribe({
      next: (val) => {
        val?.data?.map((el) => {
          el?.data?.map((el2: artistDATA) => {
            this.Artists.push(el2);
          });
        });
      },
    });
  }
}
