import { Component, OnInit } from '@angular/core';
import { IEvent } from 'src/app/core/interfaces';
import { EventService } from 'src/app/core/services/event.service';

@Component({
  selector: 'app-upcoming-event-list',
  templateUrl: './upcoming-event-list.component.html',
  styleUrls: ['./upcoming-event-list.component.css']
})
export class UpcomingEventListComponent implements OnInit {

  eventList: IEvent[];

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    const now = new Date();
    this.eventService.loadEventList().subscribe(eventList => {
      // console.log(eventList)
      this.eventList = eventList.filter(event => Date.parse(event.eventTime.toString()) > now.getTime());
      // console.log(this.eventList);
    });
  }

}
