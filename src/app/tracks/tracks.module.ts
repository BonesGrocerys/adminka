import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from '../header/header.module';
import { FormsModule } from '@angular/forms';
import { SearchService } from '../search.service';
import { TracksComponent } from './tracks.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TracksComponent],
  imports: [CommonModule, HeaderModule, FormsModule, RouterModule],
  exports: [TracksComponent],
  providers: [SearchService],
})
export class TracksModule {}
