import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageBusService, MessageType } from 'src/app/core/services/message-bus.service';
import { SchoolService } from 'src/app/core/services/school.service';


@Component({
  selector: 'app-schools-new-page',
  templateUrl: './schools-new-page.component.html',
  styleUrls: ['./schools-new-page.component.css']
})
export class SchoolsNewPageComponent implements OnInit {

  constructor(
    private router: Router, 
    private schoolService: SchoolService,
    private messageBus: MessageBusService
    ) { }

  ngOnInit(): void {
  }

  submitNewSchool(newSchoolForm: NgForm): void {
    // console.log(newSchoolForm.value);

    const formData = newSchoolForm.value;

    this.schoolService.addSchool$(formData).subscribe({
      next: (newSchool) => {
        console.log(newSchool);
        this.messageBus.notifyForMessage({ text: 'Училището е добавено!', type: MessageType.Success });
        this.router.navigate(['/schools']);
      },
      error: (err) => {
        console.error(err);
        this.messageBus.notifyForMessage({ text: err, type: MessageType.Error });
      }
    });



  }

  navigateToSchools() {
    this.router.navigate(['/schools']);
  }

}
