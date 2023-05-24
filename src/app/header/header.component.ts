import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'my-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private authService: AuthService, private router: Router) {}

  onLogout() {
    this.authService.currentUser = null;
    this.authService.isLoggedIn();
    console.log('USER:', this.authService.currentUser);

    this.router.navigate(['/login']);
  }

  goToMusicians() {
    this.router.navigate(['/musicians']);
  }

  goToApplications() {
    this.router.navigate(['/applications']);
  }
}
