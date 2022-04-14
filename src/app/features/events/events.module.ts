import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsDetailPageComponent } from './events-detail-page/events-detail-page.component';

import { EventsPageComponent } from './events-page/events-page.component';
import { EventsRoutingModule } from './events-routing.module';
import { FormsModule } from '@angular/forms';
import { EventsNewPageComponent } from './events-new-page/events-new-page.component';



@NgModule({
  declarations: [
    EventsDetailPageComponent,
    EventsPageComponent,
    EventsNewPageComponent
  ],
  imports: [
    CommonModule,
    EventsRoutingModule,
    FormsModule
  ],
  exports: [
    EventsDetailPageComponent,
    EventsPageComponent,
    EventsNewPageComponent
  ]
})
export class EventsModule { }
