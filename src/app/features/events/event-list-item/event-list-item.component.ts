import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth.service';
import { IEvent } from 'src/app/core/interfaces';

@Component({
  selector: 'app-event-list-item',
  templateUrl: './event-list-item.component.html',
  styleUrls: ['./event-list-item.component.css']
})

export class EventListItemComponent implements OnChanges {

  isLoggedIn$: Observable<boolean> = this.authService.isLoggedIn$;
  canSubscribe: boolean = false;

  @Input() event: IEvent;

  constructor(private authService: AuthService) { }

  ngOnChanges(): void {
    // TODO : use currentUser$!
    this.canSubscribe = this.event.subscribers.includes("6255cd76108cf052a83b1a20");
  }


}