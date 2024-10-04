import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-album',
  standalone: true,
  imports: [],
  templateUrl: './header-album.component.html',
  styleUrl: './header-album.component.css',
})
export class HeaderAlbumComponent {
  @Input() Image!: string;
  @Input({ required: true }) Popularity!: number;
  @Input() Name!: string;
  @Input({ required: true }) Status!: string;
  @Input({ required: true }) Description!: string;
}
