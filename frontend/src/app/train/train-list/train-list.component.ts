import { Component, OnInit } from '@angular/core';
import { TrainList } from 'src/app/model/train';
import { TrainService } from 'src/app/service/train.service';

@Component({
  selector: 'app-train-list',
  templateUrl: './train-list.component.html',
  styleUrls: ['./train-list.component.css'],
})
export class TrainListComponent implements OnInit {
  trains: TrainList = new TrainList();

  constructor(private service: TrainService) {}

  ngOnInit(): void {
    this.getAllTrains();
  }

  getAllTrains(): void {
    this.service.getAll().subscribe({
      next: (response: TrainList) => {
        this.trains = response;
      },
      error: (response: any) => {
        console.log('Error: ', response.statusText);
      },
    });
  }
}
