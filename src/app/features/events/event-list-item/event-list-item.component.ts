import { convertUpdateArguments } from '@angular/compiler/src/compiler_util/expression_converter';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth.service';
import { IEvent, IUser } from 'src/app/core/interfaces';
import { EventService } from 'src/app/core/services/event.service';

@Component({
  selector: 'app-event-list-item',
  templateUrl: './event-list-item.component.html',
  styleUrls: ['./event-list-item.component.css']
})

export class EventListItemComponent implements OnChanges, OnInit {

  isLoggedIn$: Observable<boolean> = this.authService.isLoggedIn$;
  currentUser$: Observable<IUser|undefined> = this.authService.currentUser$;
  userId: string = "";
  canSubscribe: boolean = false;

  @Input() event: IEvent;

  constructor(
    private authService: AuthService, 
    private eventService: EventService,
    private router: Router) { }

  ngOnInit(): void {
    this.currentUser$.subscribe(user => {
      this.userId = user?._id;
    });
  }

  ngOnChanges(): void {
    // TODO : use currentUser$!
    this.currentUser$.subscribe(user => {
      this.userId = user._id;
    });
    this.canSubscribe = !this.event.subscribers.includes(this.userId);
  }

  handleSubscribe(event: IEvent): void {
    this.eventService.subscribeEvent(event._id).subscribe(updatedEvent => {
      // console.log(updatedEvent);      
        this.event = updatedEvent;
        this.router.navigate(['/events']);
    })
  }

  handleUnsubscribe(event: IEvent): void {
    this.eventService.unsubscribeEvent(event._id).subscribe(updatedEvent=> {
      console.log(updatedEvent);      
        this.event = updatedEvent ;
        this.router.navigate(['/events']);
      });
  }
}