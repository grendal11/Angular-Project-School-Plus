import { AfterViewInit, Component, OnInit } from '@angular/core';
import { IEvent } from 'src/app/core/interfaces';
import { EventService } from 'src/app/core/services/event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  eventList: IEvent[];

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.eventService.loadEventList().subscribe(eventList => {
      this.eventList = eventList;
      // console.log(eventList)
    });
  }

}
