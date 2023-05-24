import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { User } from '../Interfaces/User';
@Component({
  selector: 'auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  user: User = { username: '', password: '' };
  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    console.log(this.user.username);
    this.authService
      .login(this.user.username, this.user.password)
      .subscribe((result) => {
        if (result.success) {
          this.router.navigate(['/home']);
        } else {
          // Обработка ошибки авторизации
        }
      });
  }
}
