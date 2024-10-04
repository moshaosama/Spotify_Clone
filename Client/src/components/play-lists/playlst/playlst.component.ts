import { Component, inject } from '@angular/core';
import { FooterComponent } from '../../../pages/footer/footer.component';
import { FormPlaylistComponent } from '../form-playlist/form-playlist.component';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-playlst',
  standalone: true,
  imports: [FooterComponent, FormPlaylistComponent, RouterLink, RouterModule],
  templateUrl: './playlst.component.html',
  styleUrl: './playlst.component.css',
})
export class PlaylstComponent {
  User = JSON.parse(window.localStorage.getItem('user')!);
  router = inject(Router);

  isformPlayList(): boolean {
    return this.router.url === '/playlist/form';
  }
}
