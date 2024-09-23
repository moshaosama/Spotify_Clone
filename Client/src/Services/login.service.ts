import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

export interface UserData {
  Email: string;
  Password: string;
  userName: string;
  Phone: string;
}
interface User {
  Token: string;
  data: UserData;
  statusbar: string;
}

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private httpclient = inject(HttpClient);
  onLogin(email: string, password: string) {
    this.httpclient
      .post<User>('http://localhost:4000/login', {
        email: email,
        password: password,
      })
      .subscribe({
        next: (val) => {
          window.location.reload();
          window.localStorage.setItem('Token', val?.Token),
            window.localStorage.setItem('user', JSON.stringify(val?.data));
          window.localStorage.removeItem('error');
        },
        error: (val) => {
          window.location.reload();
          window.localStorage.setItem(
            'error',
            JSON.stringify(val?.error?.message)
          ),
            window.localStorage.removeItem('user');
          window.localStorage.removeItem('Token');
        },
      });
  }
}
