import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { IUser } from 'src/app/core/interfaces';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @ViewChild('editProfileForm') editProfileForm: NgForm;

  currentUser: IUser;

  isInEditMode: boolean = false;

  constructor(
    private userService: UserService, 
    private router: Router, 
    private authService: AuthService) { }

  ngOnInit(): void {
    this.userService.getProfile$().subscribe({
      next: (user) => {
        console.log(user);
        
        this.currentUser = user;
      },
      error: () => {
        this.router.navigate(['/login']);
      }
    });
  }

  enterEditMode(): void {
    this.isInEditMode = true;

    setTimeout(() => {
      this.editProfileForm.form.patchValue({
        email: this.currentUser.email,
        username: this.currentUser.username,
        tel: this.currentUser.tel 
            ?  this.currentUser.tel: '',
      });
    });
  }

  updateProfile(): void {
    // console.log(this.editProfileForm.value);
    //TODO - http заявка
    this.userService.updateProfile$(this.editProfileForm.value).subscribe(() => {
      this.authService.authenticate().subscribe(user => {
        this.currentUser = user;
        this.router.navigate(['/profile']);
      });
    });
    this.isInEditMode = false;
  }

}
