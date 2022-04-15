import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth.service';
import { IEvent, IUser } from 'src/app/core/interfaces';
import { EventService } from 'src/app/core/services/event.service';

@Component({
  selector: 'app-events-detail-page',
  templateUrl: './events-detail-page.component.html',
  styleUrls: ['./events-detail-page.component.css']
})
export class EventsDetailPageComponent implements OnInit {
  event: IEvent;

  canSubscribe: boolean = false;
  isLoggedIn$: Observable<boolean> = this.authService.isLoggedIn$;
  currentUser$: Observable<IUser|undefined> = this.authService.currentUser$;
  userId: string = "";

  constructor(private activatedRoute: ActivatedRoute, 
    private eventService: EventService,
    private authService: AuthService) { }

  ngOnInit(): void {
    const eventId = this.activatedRoute.snapshot.params['eventId'];
    this.eventService.loadEventById(eventId).subscribe(event => {
      this.event = event;
      console.log(this.event);
      
    //TODO: CurrentUserId

      this.currentUser$.subscribe(user => {
        this.userId = user._id;
        this.canSubscribe = !this.event.subscribers.includes(this.userId);
      });

    });
  }

}
