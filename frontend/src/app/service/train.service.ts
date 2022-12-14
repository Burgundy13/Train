import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Ticket } from '../model/ticket';
import { Station, Train, TrainList } from '../model/train';

const trainUrl = 'http://localhost:3000/api/trains';
const stationUrl = 'http://localhost:3000/api/stations';
const ticketUrl = 'http://localhost:3000/api/tickets';

@Injectable({
  providedIn: 'root',
})
export class TrainService {
  constructor(private http: HttpClient) {}

  getAllTrains(params?: any): Observable<TrainList> {
    let options = {};
    if (params) {
      options = {
        params:
          new HttpParams().set(
            'filter',
            params.filter && JSON.stringify(params.filter)
          ) || '',
      };
    }
    return this.http.get(trainUrl, options).pipe(
      map((data: any) => {
        return new TrainList(data);
      })
    );
  }
  getAllStations(): Observable<Station[]> {
    return this.http.get(stationUrl).pipe(
      map((data: any) => {
        return data && data.map((elem: any) => new Station(elem));
      })
    );
  }
  getOneTrainInfo(id: number): Observable<Train> {
    return this.http.get(`${trainUrl}/${id}`).pipe(
      map((data: any) => {
        return new Train(data);
      })
    );
  }
  postTicket(ticket: Ticket): Observable<any> {
    return this.http.post(ticketUrl, ticket);
  }
}
