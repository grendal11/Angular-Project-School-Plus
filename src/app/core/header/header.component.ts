import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth.service';
import { IUser } from '../interfaces';
import { MessageBusService, MessageType } from '../services/message-bus.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit, OnDestroy {

  currentUser$: Observable<IUser|undefined> = this.authService.currentUser$;
  isLoggedIn$: Observable<boolean> = this.authService.isLoggedIn$;

  message: string = '';
  isErrorMessage: boolean = false;

  private isLoggingOut: boolean = false;

  private subscription: Subscription|undefined = undefined;    

  constructor(
    public authService: AuthService, 
    private router: Router, 
    private messageBus: MessageBusService) {
  }

  ngOnInit(): void {
    this.subscription = this.messageBus.onNewMessage$.subscribe(newMessage => {
      this.message = newMessage?.text || '';
      this.isErrorMessage = newMessage?.type === MessageType.Error

      if (this.message) {
        setTimeout(() => {
          this.messageBus.clear();
        }, 3000);
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  logoutHandler(): void {
    if (this.isLoggingOut) {
      return;
    }

    this.isLoggingOut = true;

    this.authService.logout$().subscribe({
      next: args => { 
        console.log(args);         
      },
      complete: () => {
        this.isLoggingOut = false;
        this.messageBus.notifyForMessage({text: 'Излязохте от системата!', type: MessageType.Success});
        this.router.navigate(['/home']);
      },
      error: () => {
        //Show message with error
        this.isLoggingOut = false;
      }
    });
  }
}

