import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Ticket } from 'src/app/model/ticket';
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
  get name() {
    return this.form.get('name');
  }
  get birthDate() {
    return this.form.get('birthDate');
  }
  constructor(
    private service: TrainService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getTrain();
  }
  getTrain(): void {
    this.route.params.subscribe((params: Params) => {
      this.service.getOneTrainInfo(params['id']).subscribe({
        next: (response: Train) => {
          this.train = response;

          this.form.patchValue(response);
        },
        error: (response: any) => {
          console.log('Error: ', response.statusText);
        },
      });
    });
  }
  postTicket(): void {
    let newTicket: Ticket = new Ticket(this.form.value);

    this.service.postTicket(newTicket).subscribe({
      next: (response: Ticket) => {
        this.router.navigate(['/mytickets']);
      },
      error: (response: any) => {
        console.log('Error: ', response.statusText);
      },
    });
  }
}
