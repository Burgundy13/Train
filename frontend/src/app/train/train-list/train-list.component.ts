import { Component, OnInit } from '@angular/core';
import { Station, TrainList } from 'src/app/model/train';
import { TrainService } from 'src/app/service/train.service';

@Component({
  selector: 'app-train-list',
  templateUrl: './train-list.component.html',
  styleUrls: ['./train-list.component.css'],
})
export class TrainListComponent implements OnInit {
  trains: TrainList = new TrainList();
  travels: Station[] = [];
  params = {
    filter: {
      to: '',
      from: '',
    },
  };

  constructor(private service: TrainService) {}

  ngOnInit(): void {
    this.getTrains();
    this.getStations();
  }

  getTrains(): void {
    this.service.getAllTrains(this.params).subscribe({
      next: (response: TrainList) => {
        this.trains = response;
      },
      error: (response: any) => {
        console.log('Error: ', response.statusText);
      },
    });
  }
  convertTime(time: number): string {
    return `${
      Math.floor(time / 60) < 9
        ? '0' + Math.floor(time / 60)
        : Math.floor(time / 60)
    }:${time % 60 < 9 ? '0' + (time % 60) : time % 60}`;
  }

  convertPics(pic: string): string {
    if (pic == 'inter-city') {
      return 'assets/images/inter-city.svg';
    } else if (pic == 'brzi') {
      return 'assets/images/brzi.jpg';
    } else {
      return 'assets/images/regio.jpg';
    }
  }
  getStations(): void {
    this.service.getAllStations().subscribe({
      next: (response: Station[]) => {
        this.travels = response;
      },
      error: (response: any) => {
        console.log('Error: ', response.statusText);
      },
    });
  }
  toSelectChange(event: any): void {
    this.params.filter.to = event.target.value;
    this.getTrains();
  }
  fromSelectChange(event: any): void {
    this.params.filter.from = event.target.value;
    this.getTrains();
  }
}
