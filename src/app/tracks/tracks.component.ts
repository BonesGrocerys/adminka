import { Component } from '@angular/core';
import { ITrack } from '../Interfaces/Track';
import { SearchService } from '../search.service';

@Component({
  selector: 'tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.scss'],
})
export class TracksComponent {
  tracks: ITrack[] = [];
  searchText: string = '';
  // selectedMusician: number | null | undefined;
  selectedTrack: ITrack | null | undefined;
  constructor(private searchService: SearchService) {}

  search() {
    this.searchService.getTracks(this.searchText).subscribe((data: any) => {
      if (data.success) {
        this.tracks = data?.result?.result || [];
      } else {
        console.error(data.message);
      }
    });
  }

  exitSearch() {
    this.tracks = [];
    this.searchText = '';
  }

  getCoverUrl(coverBase64: string | undefined): string {
    if (coverBase64) {
      return 'data:image/png;base64,' + coverBase64;
    } else {
      return '';
    }
  }

  selectTrack(index: number) {
    this.selectedTrack = this.tracks[index];
  }

  DeleteTrack() {
    if (this.selectedTrack) {
      this.searchService
        .DeleteTrack(this.selectedTrack?.id)
        .subscribe((data: any) => {
          if (data.success) {
            console.log(data);
            alert('Трек удалён');
            this.search();
            this.selectedTrack = null;
          } else {
            console.error(data.message);
          }
        });
    }
  }
}
