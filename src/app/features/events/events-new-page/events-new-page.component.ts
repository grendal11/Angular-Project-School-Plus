import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { CreateEventDto, EventService } from 'src/app/core/services/event.service';

@Component({
  selector: 'app-events-new-page',
  templateUrl: './events-new-page.component.html',
  styleUrls: ['./events-new-page.component.css']
})
export class EventsNewPageComponent implements OnInit {

  constructor(
    private router: Router, 
    private authService: AuthService,
    private eventService: EventService
    ) { }

  ngOnInit(): void {
  }

  submitNewEvent(newEventForm: NgForm): void {
    // console.log(newEventForm.value);

    const formData = newEventForm.value;
    
    this.authService.currentUser$.subscribe(user => {
      const eventSchoolId = user.schoolId == undefined ? "" : user.schoolId;
     
      const newEvent: CreateEventDto = {
        eventName: formData.eventName,
        eventDescription: formData.eventDescription,
        eventTime: formData.eventTime,
        schoolId: formData.schoolCheck != "" ? eventSchoolId : ""
      }

      // console.log(newEvent);
      
      this.eventService.addEvent$(newEvent).subscribe({
        next: (newEvent) => {
          console.log(newEvent);   
          this.router.navigate(['/events']);     
        },
        error: (err) => {
          console.error(err);        
        } 
      });
      
    });


    
  }

  navigateToEvents(){
    this.router.navigate(['/events']);
  }

}
