import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { MusiciansComponent } from './musicians/musicians.component';
import { ApplicationsComponent } from './applications/applications.component';
import { TracksComponent } from './tracks/tracks.component';

const routes: Routes = [
  { path: 'login', component: AuthComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  {
    path: 'musicians',
    component: MusiciansComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'applications',
    component: ApplicationsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'tracks',
    component: TracksComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {}
