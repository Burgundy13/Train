import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import { TrainListComponent } from './train/train-list/train-list.component';
import { TrainDetailsComponent } from './train/train-details/train-details.component';
import { TicketFormComponent } from './ticket/ticket-form/ticket-form.component';
import { TicketsListComponent } from './ticket/tickets-list/tickets-list.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, AboutComponent, NavBarComponent, TrainListComponent, TrainDetailsComponent, TicketFormComponent, TicketsListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
