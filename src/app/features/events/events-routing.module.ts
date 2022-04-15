import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "src/app/core/guards/auth.guard";
import { EventsDetailPageComponent } from "./events-detail-page/events-detail-page.component";
import { EventsNewPageComponent } from "./events-new-page/events-new-page.component";
import { EventsPageComponent } from "./events-page/events-page.component";

const routes: Routes = [
    {
        path: 'events',
        component: EventsPageComponent
    },
    {
        path: 'events/new',
        canActivate: [AuthGuard], 
        component: EventsNewPageComponent
    },
    {
        path: 'events/:eventId',
        component: EventsDetailPageComponent
    },
];

export const EventsRoutingModule = RouterModule.forChild(routes);