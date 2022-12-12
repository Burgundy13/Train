import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { TrainList } from '../model/train';

const trainUrl = 'http://localhost:3000/api/trains';

@Injectable({
  providedIn: 'root',
})
export class TrainService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<TrainList> {
    return this.http.get(trainUrl).pipe(
      map((data: any) => {
        return new TrainList(data);
      })
    );
  }
}
