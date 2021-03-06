import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsDetailPageComponent } from './events-detail-page/events-detail-page.component';

import { EventsPageComponent } from './events-page/events-page.component';
import { EventsRoutingModule } from './events-routing.module';
import { FormsModule } from '@angular/forms';
import { EventsNewPageComponent } from './events-new-page/events-new-page.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventListItemComponent } from './event-list-item/event-list-item.component';
import { UpcomingEventListComponent } from './upcoming-event-list/upcoming-event-list.component';



@NgModule({
  declarations: [
    EventsDetailPageComponent,
    EventsPageComponent,
    EventsNewPageComponent,
    EventListComponent,
    EventListItemComponent,
    UpcomingEventListComponent
  ],
  imports: [
    CommonModule,
    EventsRoutingModule,
    FormsModule
  ],
  exports: [
    EventsDetailPageComponent,
    EventsPageComponent,
    EventsNewPageComponent, 
    UpcomingEventListComponent
  ]
})
export class EventsModule { }
