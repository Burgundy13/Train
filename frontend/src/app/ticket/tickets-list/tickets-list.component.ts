import { Component, OnInit } from '@angular/core';
import { TicketList } from 'src/app/model/ticket';
import { TrainService } from 'src/app/service/train.service';

@Component({
  selector: 'app-tickets-list',
  templateUrl: './tickets-list.component.html',
  styleUrls: ['./tickets-list.component.css'],
})
export class TicketsListComponent implements OnInit {
  tickets: TicketList = new TicketList();
  constructor(private service: TrainService) {}

  ngOnInit(): void {
    this.getTickets();
  }
  getTickets(): void {
    this.service.getAllTickets().subscribe({
      next: (response: TicketList) => {
        this.tickets = response;
      },
      error: (response: any) => {
        console.log('Error: ', response.statusText);
      },
    });
  }
}
