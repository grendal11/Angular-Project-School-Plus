import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchoolsRoutingModule } from './schools-routing.module';

import { SchoolsPageComponent } from './schools-page/schools-page.component';
import { SchoolListComponent } from './school-list/school-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SchoolsNewPageComponent } from './schools-new-page/schools-new-page.component';
import { SchoolListItemComponent } from './school-list-item/school-list-item.component';
import { SchoolsDetailPageComponent } from './schools-detail-page/schools-detail-page.component';




@NgModule({
  declarations: [
    SchoolsPageComponent,
    SchoolListComponent, 
    SchoolListItemComponent,
    SchoolsNewPageComponent,
    SchoolsDetailPageComponent
  ],
  imports: [
    CommonModule,
    SchoolsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    SchoolsPageComponent,
    SchoolsNewPageComponent
  ]
})
export class SchoolsModule { }
