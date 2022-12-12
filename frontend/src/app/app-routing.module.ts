import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './core/about/about.component';
import { TicketsListComponent } from './ticket/tickets-list/tickets-list.component';
import { TrainListComponent } from './train/train-list/train-list.component';

const routes: Routes = [
  { path: 'home', component: TrainListComponent },
  { path: 'mytickets', component: TicketsListComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
