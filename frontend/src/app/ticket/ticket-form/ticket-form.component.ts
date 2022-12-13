import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Train } from 'src/app/model/train';
import { TrainService } from 'src/app/service/train.service';

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.css'],
})
export class TicketFormComponent implements OnInit {
  train: Train = new Train();
  disabled: boolean = false;
  form: FormGroup = new FormGroup({
    number: new FormControl(''),
    from: new FormControl(''),
    departure: new FormControl(''),
    to: new FormControl(''),
    arrival: new FormControl(''),
    price: new FormControl(''),
    name: new FormControl('', Validators.required),
    birthDate: new FormControl('', Validators.required),
  });
  constructor(private service: TrainService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getTrain();
  }
  getTrain(): void {
    this.route.params.subscribe((params: Params) => {
      this.service.getOneTrainInfo(params['id']).subscribe({
        next: (response: Train) => {
          this.train = response;
          this.form.patchValue(response);
          console.log(response);
        },
        error: (response: any) => {
          console.log('Error: ', response.statusText);
        },
      });
    });
  }
  postTicket(): void {
    console.log(this.form.value);
  }
}
