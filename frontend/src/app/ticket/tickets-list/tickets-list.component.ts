import { Component, OnInit } from '@angular/core';
import { Ticket, TicketList } from 'src/app/model/ticket';
import { TrainService } from 'src/app/service/train.service';

@Component({
  selector: 'app-tickets-list',
  templateUrl: './tickets-list.component.html',
  styleUrls: ['./tickets-list.component.css'],
})
export class TicketsListComponent implements OnInit {
  tickets: TicketList = new TicketList();
  params = {
    sort: 'departure',
    sortDirection: 'asc',
  };
  constructor(private service: TrainService) {}

  ngOnInit(): void {
    this.getTickets();
  }
  getTickets(): void {
    this.service.getAllTickets(this.params).subscribe({
      next: (response: TicketList) => {
        this.tickets = response;
      },
      error: (response: any) => {
        console.log('Error: ', response.statusText);
      },
    });
  }
  deleteTicket(id: number): void {
    this.service.deleteTicket(id).subscribe({
      next: (response: Ticket) => {
        this.getTickets();
      },
      error: (response: any) => {
        console.log('Error: ', response.statusText);
      },
    });
  }
}
