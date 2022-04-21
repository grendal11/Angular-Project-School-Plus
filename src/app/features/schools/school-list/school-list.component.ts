import { Component, OnInit } from '@angular/core';
import { ISchool } from 'src/app/core/interfaces';
import { SchoolService } from 'src/app/core/services/school.service';

@Component({
  selector: 'app-school-list',
  templateUrl: './school-list.component.html',
  styleUrls: ['./school-list.component.css']
})
export class SchoolListComponent implements OnInit {

  schoolList: ISchool[];

  constructor(private schoolService: SchoolService) { }

  ngOnInit(): void {
    this.schoolService.loadSchoolList().subscribe(schoolList => {
      this.schoolList = schoolList;
      console.log(schoolList)
    });
  }

}
