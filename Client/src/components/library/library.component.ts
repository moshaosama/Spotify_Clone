import { Component, inject } from '@angular/core';
import { libraryService } from '../../Services/library.service';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PlayListsComponent } from '../play-lists/play-lists.component';
import { ContentLibraryComponent } from './content-library/content-library.component';

@Component({
  selector: 'app-ylibrary',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    PlayListsComponent,
    ContentLibraryComponent,
  ],
  templateUrl: './library.component.html',
  styleUrl: './library.component.scss',
})
export class libraryComponent {
  libraryService = inject(libraryService);

  isLogin(): boolean {
    const User = JSON.parse(window.localStorage.getItem('user')!);
    if (User) {
      return true;
    } else {
      return false;
    }
  }
  get PlayLists() {
    return this.libraryService.playLists?.map((el) => {
      return el;
    });
  }
  isPlayLists(): any {
    const Result = window.localStorage.getItem('playlistResult');
    if (Result?.toString() === '0') {
      return true;
    } else {
      return false;
    }
  }
}
