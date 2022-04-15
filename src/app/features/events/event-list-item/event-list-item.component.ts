import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth.service';
import { IEvent, IUser } from 'src/app/core/interfaces';

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

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.currentUser$.subscribe(user => {
      this.userId = user?._id;
    });
  }

  ngOnChanges(): void {
    // TODO : use currentUser$!
    this.canSubscribe = !this.event.subscribers.includes(this.userId);
  }


}