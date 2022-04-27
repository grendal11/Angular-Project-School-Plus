import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, filter, startWith, switchMap, tap } from 'rxjs';
import { ISchool } from 'src/app/core/interfaces';
import { SchoolService } from 'src/app/core/services/school.service';

@Component({
  selector: 'app-school-list',
  templateUrl: './school-list.component.html',
  styleUrls: ['./school-list.component.css']
})
export class SchoolListComponent implements OnInit {

  schoolList: ISchool[];

  searchControl = new FormControl('');

  constructor(private schoolService: SchoolService) { }

  ngOnInit(): void {
    // this.schoolService.loadSchoolList('').subscribe(schoolList => {
    //   this.schoolList = schoolList;
    //   console.log(schoolList)
    // });

    this.searchControl.valueChanges.pipe(
      debounceTime(300),
      // filter(searchTerm => searchTerm.length > 1),
      startWith(''),
      // tap(searchTerm => (console.log('searchTerm', searchTerm))),
      switchMap(searchTerm => this.schoolService.loadSchoolList(searchTerm))
    )
      .subscribe(schoolList => {
        this.schoolList = schoolList;
      });

  }

}
