import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "src/app/core/guards/auth.guard";
import { NotFoundPageComponent } from "src/app/core/not-found-page/not-found-page.component";
import { SchoolsDetailPageComponent } from "./schools-detail-page/schools-detail-page.component";
import { SchoolsNewPageComponent } from "./schools-new-page/schools-new-page.component";
import { SchoolsPageComponent } from "./schools-page/schools-page.component";

const routes: Routes = [
    {
        path: 'schools',
        component: SchoolsPageComponent
    },
    {
        path: 'schools/new',
        canActivate: [AuthGuard], 
        component: SchoolsNewPageComponent
    },
    {
        path: 'schools/:schoolId',
        component: SchoolsDetailPageComponent
    },
];

export const SchoolsRoutingModule = RouterModule.forChild(routes);