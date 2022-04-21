import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth.service';
import { ISchool, IUser } from 'src/app/core/interfaces';

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

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    // this.currentUser$.subscribe(data => {
    //   console.log(data);
    //   console.log(this.school);
      
    // })
  }
}
