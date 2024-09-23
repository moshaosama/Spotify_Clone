import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserData } from '../../Services/login.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  user = signal<UserData>(JSON.parse(window.localStorage.getItem('user')!));
  private router = inject(Router);

  onLogOut() {
    window.localStorage.removeItem('user');
    window.localStorage.removeItem('Token');
    window.location.reload();
  }
  onLogin() {
    window.localStorage.removeItem('error');
    if (this.user!) {
      this.router.navigate(['/']);
    }
    window.location.reload();
  }
}
