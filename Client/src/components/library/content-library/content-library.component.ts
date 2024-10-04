import { Component, inject } from '@angular/core';
import { libraryService } from '../../../Services/library.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-content-library',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './content-library.component.html',
  styleUrl: './content-library.component.css',
})
export class ContentLibraryComponent {
  libraryService = inject(libraryService);
  Token = window.localStorage.getItem('Token');

  getLinks() {
    return this.libraryService.Links;
  }
}
