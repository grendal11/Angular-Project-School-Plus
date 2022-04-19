import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchoolsRoutingModule } from './schools-routing.module';

import { SchoolsPageComponent } from './schools-page/schools-page.component';
import { SchoolListComponent } from './school-list/school-list.component';
import { FormsModule } from '@angular/forms';
import { SchoolsNewPageComponent } from './schools-new-page/schools-new-page.component';




@NgModule({
  declarations: [
    SchoolsPageComponent,
    SchoolListComponent, 
    SchoolsNewPageComponent
  ],
  imports: [
    CommonModule,
    SchoolsRoutingModule,
    FormsModule
  ],
  exports: [
    SchoolsPageComponent,
    SchoolsNewPageComponent
  ]
})
export class SchoolsModule { }
