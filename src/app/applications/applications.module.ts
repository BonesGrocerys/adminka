import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationsComponent } from './applications.component';
import { HeaderModule } from '../header/header.module';
import { ApplicationsService } from '../applications.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ApplicationsComponent],
  imports: [HeaderModule, CommonModule, RouterModule, FormsModule],
  exports: [ApplicationsComponent],
  providers: [ApplicationsService],
})
export class ApplicationsModule {}
