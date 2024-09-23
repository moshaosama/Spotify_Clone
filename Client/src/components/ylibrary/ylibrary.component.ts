import { Component, inject } from '@angular/core';
import { YlibraryService } from '../../Services/ylibrary.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-ylibrary',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './ylibrary.component.html',
  styleUrl: './ylibrary.component.css',
})
export class YlibraryComponent {
  libraryService = inject(YlibraryService);
  getLinks() {
    return this.libraryService.Links;
  }
}
