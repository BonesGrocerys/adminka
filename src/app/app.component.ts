import { Component, OnDestroy } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  private subscription: Subscription = Subscription.EMPTY;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.subscription = this.authService
      .isLoggedIn()
      .subscribe((isLoggedIn) => {
        if (isLoggedIn) {
          this.router.navigate(['/home']);
        }
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
