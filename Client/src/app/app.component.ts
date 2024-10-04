import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../pages/header/header.component';
import { libraryComponent } from '../components/library/library.component';
import { LoginComponent } from '../components/login/login.component';
import { PlayMusicComponent } from '../components/play-music/play-music.component';
import { PlaylstComponent } from '../components/play-lists/playlst/playlst.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    libraryComponent,
    LoginComponent,
    PlayMusicComponent,
    PlaylstComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'spotify';
  router = inject(Router);

  isLoginPage(): boolean {
    return this.router.url === '/login';
  }
}
