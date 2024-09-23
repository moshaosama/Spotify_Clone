import { Component, inject } from '@angular/core';
import { AlbumsService } from '../../Services/albums.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css',
})
export class AlbumsComponent {
  albumService = inject(AlbumsService);
  routes = inject(ActivatedRoute);

  get Albums() {
    return this.albumService.Albums.map((el) => {
      return el;
    });
  }
  onSubmit() {
    this.routes.paramMap.subscribe((params) => {
      console.log(params.get('id'));
    });
  }
}
