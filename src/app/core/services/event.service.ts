import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IEvent, IEventPost } from '../interfaces';

const apiUrl = environment.apiUrl;

export interface CreateEventDto {
  eventName: string,
  eventDescription: string,
  eventTime: Date,
  schoolId?: string
}

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  addEvent$(body: CreateEventDto): Observable<IEvent> {
    return this.http.post<IEvent>(`${apiUrl}/events`, body, { withCredentials: true })
  }

  loadEventList(): Observable<IEvent[]> {
    return this.http.get<IEvent[]>(`${apiUrl}/events`);
  }

  loadEventById(id: string): Observable<IEvent> {
    return this.http.get<IEvent>(`${apiUrl}/events/${id}`);
  }

}
