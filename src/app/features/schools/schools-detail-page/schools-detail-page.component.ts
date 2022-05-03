import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth.service';
import { ISchool, IUser } from 'src/app/core/interfaces';
import { SchoolService } from 'src/app/core/services/school.service';

@Component({
  selector: 'app-schools-detail-page',
  templateUrl: './schools-detail-page.component.html',
  styleUrls: ['./schools-detail-page.component.css']
})
export class SchoolsDetailPageComponent implements OnInit {
  school: ISchool;

  canSubscribe: boolean = false;
  isLoggedIn$: Observable<boolean> = this.authService.isLoggedIn$;
  currentUser$: Observable<IUser | undefined> = this.authService.currentUser$;
  userId: string = "";

  constructor(
    private activatedRoute: ActivatedRoute,
    private schoolService: SchoolService,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    const schoolId = this.activatedRoute.snapshot.params['schoolId'];
    this.schoolService.loadSchoolById(schoolId).subscribe(school => {
      this.school = school;      
    });
  }
}
