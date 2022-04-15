import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css']
})
export class HeroSectionComponent implements OnInit {

  isLoggedIn$: Observable<boolean> = this.authService.isLoggedIn$;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

}
