import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../pages/header/header.component';
import { YlibraryComponent } from '../components/ylibrary/ylibrary.component';
import { LoginComponent } from '../components/login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, YlibraryComponent, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'spotify';
  constructor(private router: Router) {}
  isLoginPage(): boolean {
    return this.router.url === '/login';
  }
  ngOnInit() {
    console.log(this.isLoginPage());
  }
}
