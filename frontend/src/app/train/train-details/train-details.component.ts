import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Train } from 'src/app/model/train';
import { TrainService } from 'src/app/service/train.service';

@Component({
  selector: 'app-train-details',
  templateUrl: './train-details.component.html',
  styleUrls: ['./train-details.component.css'],
})
export class TrainDetailsComponent implements OnInit {
  train: Train = new Train();

  constructor(private service: TrainService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getTrainInfo();
  }

  getTrainInfo(): void {
    this.route.params.subscribe((params: Params) => {
      this.service.getOneTrainInfo(params['id']).subscribe({
        next: (response: Train) => {
          this.train = response;
        },
        error: (response: any) => {
          console.log('Error: ', response.statusText);
        },
      });
    });
  }
}
