import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Album, albumData } from '../interfaces';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AlbumsService {
  httpClient = inject(HttpClient);
  routes = inject(ActivatedRoute);
  public Albums: albumData[] = [];
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
}
