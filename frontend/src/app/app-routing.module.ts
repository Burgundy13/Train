import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './core/about/about.component';
import { TicketFormComponent } from './ticket/ticket-form/ticket-form.component';
import { TicketsListComponent } from './ticket/tickets-list/tickets-list.component';
import { TrainDetailsComponent } from './train/train-details/train-details.component';
import { TrainListComponent } from './train/train-list/train-list.component';

const routes: Routes = [
  { path: 'trains', component: TrainListComponent },
  { path: 'trains/:id', component: TrainDetailsComponent },
  { path: 'trains/:id/ticketform', component: TicketFormComponent },
  { path: 'mytickets', component: TicketsListComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
