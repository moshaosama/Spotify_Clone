import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormControlName,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { LoginService } from '../../../Services/login.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  private LoginService = inject(LoginService);
  form = new FormGroup({
    email: new FormControl('', [Validators.email]),
    password: new FormControl('', [
      Validators.minLength(6),
      Validators.maxLength(10),
    ]),
  });
  user = window.localStorage.getItem('user');

  onSubmit() {
    this.LoginService.onLogin(
      this.form?.controls.email?.value!,
      this.form?.controls.password?.value!
    );
  }
}
