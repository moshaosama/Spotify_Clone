import { Component, inject, OnInit } from '@angular/core';
import { AlbumsService } from '../../Services/albums.service';
import { artistService } from '../../Services/artist.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-play-music',
  standalone: true,
  imports: [],
  templateUrl: './play-music.component.html',
  styleUrl: './play-music.component.css',
})
export class PlayMusicComponent {
  // Dependancy Injectable
  private SongService = inject(AlbumsService);
  private routes = inject(ActivatedRoute);
  artistService = inject(artistService);
  albumService = inject(AlbumsService);

  progress_Bar = 0;
  get Artist() {
    var id: string;
    this.routes.paramMap.subscribe((params) => {
      id = params.get('id')!;
    });

    return this.artistService.Artists.filter((el) => el?.id === id);
  }

  get Song() {
    return this.SongService.Song?.map((el) => {
      return el;
    });
  }

  PasueSong() {
    this.albumService.PauseSong();
  }
  playSong(src: string) {
    this.albumService.playSong(src);
  }
}
