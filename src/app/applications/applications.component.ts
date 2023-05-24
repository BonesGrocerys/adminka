import { Component, OnInit } from '@angular/core';
import { ApplicationsService } from '../applications.service';
import { IMusicians } from '../Interfaces/Musician';

@Component({
  selector: 'applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss'],
})
export class ApplicationsComponent implements OnInit {
  musicians: IMusicians[] = [];
  selectedMusician: IMusicians | null | undefined;
  constructor(private applicationsService: ApplicationsService) {}

  ngOnInit() {
    this.applicationsService.GetApplications().subscribe((data: any) => {
      if (data.success) {
        this.musicians = data?.result?.result || [];
        console.log(data.result.result);
      } else {
        console.error(data.message);
      }
    });
  }

  ApplyApplication() {
    if (this.selectedMusician) {
      this.applicationsService
        .ApplyApplication(this.selectedMusician.id)
        .subscribe((data: any) => {
          if (data.success) {
            this.musicians = data?.result?.result || [];
            this.ngOnInit();
            this.selectedMusician = null;
            alert('Заявка одобрена');
            console.log(data.result);
          } else {
            console.error(data.message);
          }
        });
    }
  }

  RejectApplication() {
    if (this.selectedMusician) {
      this.applicationsService
        .RejectApplication(this.selectedMusician.id)
        .subscribe((data: any) => {
          if (data.success) {
            this.musicians = data?.result?.result || [];
            this.ngOnInit();
            this.selectedMusician = null;
            alert('Заявка отклонена');
            console.log(data.result);
          } else {
            console.error(data.message);
          }
        });
    }
  }

  selectMusician(index: number) {
    this.selectedMusician = this.musicians[index];
  }

  getCoverUrl(coverBase64: string | undefined): string {
    if (coverBase64) {
      return 'data:image/png;base64,' + coverBase64;
    } else {
      return '';
    }
  }
}
