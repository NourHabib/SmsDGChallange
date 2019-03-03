import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import Event from './../interfaces/event';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http: HttpClient) { }

  getEvents (): Observable<Event[]> {
    return this.http.get<Event[]>('../../assets/data.json')
      .pipe(
        catchError(this.handleError('getEvents', []))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

}
