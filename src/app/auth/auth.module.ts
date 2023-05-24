import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { HeaderModule } from '../header/header.module';

@NgModule({
  declarations: [AuthComponent],
  imports: [CommonModule, AppRoutingModule, FormsModule, HeaderModule],
  exports: [AuthComponent],
})
export class AuthModule {}
