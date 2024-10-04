import { Component, inject, OnInit } from '@angular/core';
import { libraryService } from '../../Services/library.service';
import { RouterLink } from '@angular/router';
import { HeaderLibraryComponent } from "../library/header-library/header-library.component";

@Component({
  selector: 'app-play-lists',
  standalone: true,
  imports: [RouterLink, HeaderLibraryComponent],
  templateUrl: './play-lists.component.html',
  styleUrl: './play-lists.component.css',
})
export class PlayListsComponent {
  playListService = inject(libraryService);
  User = JSON.parse(window.localStorage.getItem('user')!);
  Token = window.localStorage.getItem('Token');

  get PlayLists() {
    return this.playListService.playLists?.map((el) => {
      return el;
    });
  }
}
