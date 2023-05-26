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
  error: string | null | undefined;
  validation!: boolean;
  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    console.log(this.user.username);
    this.authService
      .login(this.user.username, this.user.password)
      .subscribe((result) => {
        if (result.success) {
          this.router.navigate(['/home']);
        } else {
          this.validation = this.authService.error
            ? ((this.error = this.authService.error), true)
            : false;
        }
      });
  }
}
