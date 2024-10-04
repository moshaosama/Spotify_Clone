import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header-library',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header-library.component.html',
  styleUrl: './header-library.component.css',
})
export class HeaderLibraryComponent {
  Token = window.localStorage.getItem('Token');
}
