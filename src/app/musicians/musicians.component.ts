import { Component, ChangeDetectorRef } from '@angular/core';
import { SearchService } from '../search.service';
import { IMusicians } from '../Interfaces/Musician';
import { IOperationResult } from '../Interfaces/OperationResult';

@Component({
  selector: 'musicians',
  templateUrl: './musicians.component.html',
  styleUrls: ['./musicians.component.scss'],
})
export class MusiciansComponent {
  musicians: IMusicians[] = [];
  searchText: string = '';
  isLoading = false;
  // selectedMusician: number | null | undefined;
  selectedMusician: IMusicians | null | undefined;
  constructor(private searchService: SearchService) {}

  // search() {

  //   this.searchService.getMusicians(this.searchText).subscribe((data: any) => {
  //     if (data.success) {
  //       this.musicians = data?.result?.result || [];
  //     } else {
  //       console.error(data.message);
  //     }
  //   });
  // }

  search() {
    try {
      this.isLoading = true;
      console.log(this.isLoading);
      this.searchService
        .getMusicians(this.searchText)
        .subscribe((data: any) => {
          if (data.success) {
            this.musicians = data?.result?.result || [];
          } else {
            console.error(data.message);
          }
        });
    } catch (error) {
      console.error(error);
    } finally {
      this.isLoading = false;
      console.log(this.isLoading);
    }
  }

  DeleteMusician() {
    if (this.selectedMusician) {
      this.searchService
        .DeleteMusician(this.selectedMusician?.id)
        .subscribe((data: any) => {
          if (data.success) {
            console.log(data);
            alert('Музыкант удалён');
            this.search();
            this.selectedMusician = null;
          } else {
            console.error(data.message);
          }
        });
    }
  }

  exitSearch() {
    this.musicians = [];
    this.searchText = '';
  }

  getCoverUrl(coverBase64: string | undefined): string {
    if (coverBase64) {
      return 'data:image/png;base64,' + coverBase64;
    } else {
      return '';
    }
  }

  selectMusician(index: number) {
    this.selectedMusician = this.musicians[index];
  }
}
