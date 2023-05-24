import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusiciansComponent } from './musicians.component';
import { HeaderModule } from '../header/header.module';
import { SearchService } from '../search.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MusiciansComponent],
  imports: [CommonModule, HeaderModule, FormsModule, RouterModule],
  exports: [MusiciansComponent],
  providers: [SearchService],
})
export class MusiciansModule {}
