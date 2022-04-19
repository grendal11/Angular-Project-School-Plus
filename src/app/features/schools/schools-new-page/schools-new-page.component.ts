import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-schools-new-page',
  templateUrl: './schools-new-page.component.html',
  styleUrls: ['./schools-new-page.component.css']
})
export class SchoolsNewPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  submitNewSchool(newSchoolForm: NgForm): void {

  }

  // navigateToSchools() {

  // }

}
