import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { playList, PlayListData } from '../interfaces';
import { map } from 'rxjs';
import { AlbumsService } from './albums.service';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class libraryService {
  httpClient = inject(HttpClient);
  albumsService = inject(AlbumsService);
  Token = window.localStorage.getItem('Token');
  playLists: PlayListData[] = [];
  Links = [
    {
      name: 'Legal',
    },
    {
      name: 'Safety & Privacy Center',
    },
    {
      name: 'Privacy Policy',
    },
    {
      name: 'Cookies',
    },
    {
      name: 'About Ads',
    },
    {
      name: 'Accessibility',
    },
  ];

  constructor() {
    this.httpClient
      .get<playList>('http://localhost:4000/playList')
      .pipe(map((resData) => resData))
      .subscribe({
        next: (val: playList) => {
          console.log('====================================');
          val?.data?.map((el: PlayListData) => {
            return this.playLists.push(el);
          });
          console.log('====================================');
          window.localStorage.setItem(
            'playlistResult',
            val?.results.toString()
          );
        },
      });
  }

  onSave(Name: string, Description: string, Image: string) {
    this.httpClient
      .post(
        'http://localhost:4000/playList',
        {
          Name: Name,
          Description: Description,
          Image: Image,
        },
        {
          headers: this.Token ? { authorization: this.Token } : null!,
        }
      )
      .subscribe({
        next: (val) => console.log(val),
      });
  }
}
