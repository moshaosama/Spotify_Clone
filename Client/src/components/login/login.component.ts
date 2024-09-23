import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from './form/form.component';
interface ErrorMessage {
  message: string;
  statusbar: string;
}
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet, FormComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  user = window.localStorage.getItem('user');
  error = window.localStorage.getItem('error');
}
