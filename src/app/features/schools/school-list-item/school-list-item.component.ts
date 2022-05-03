import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth.service';
import { ISchool, IUser } from 'src/app/core/interfaces';
import { SchoolService } from 'src/app/core/services/school.service';

@Component({
  selector: 'app-school-list-item',
  templateUrl: './school-list-item.component.html',
  styleUrls: ['./school-list-item.component.css']
})
export class SchoolListItemComponent implements OnInit {

  isLoggedIn$: Observable<boolean> = this.authService.isLoggedIn$;
  currentUser$: Observable<IUser | undefined> = this.authService.currentUser$;
  userId: string = "";
  canSubscribe: boolean = false;

  @Input() school: ISchool;

  constructor(
    private authService: AuthService,
    private schoolService: SchoolService,
    private router: Router) { }

  ngOnInit(): void {
    // this.currentUser$.subscribe(data => {
    //   console.log(data);
    //   console.log(this.school);
      
    // })
  }

 handleAddTeacher(school: ISchool): void{
    console.log(school._id);
    this.schoolService.addTeacher(school._id).subscribe(updateSchool => {
      // console.log(updatedEvent);      
      this.school = { ...updateSchool };
    })
    this.router.navigate(['/schools']);  
  }

  handleAddStudent(school: ISchool): void{
    console.log(school.schoolName);
    
  }
}
