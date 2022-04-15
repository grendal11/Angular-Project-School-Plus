import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { RouterModule } from '@angular/router';
import { UserService } from './services/user.service';
import { storageServiceProvider } from './services/storage.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { ErrorHandlerInterceptor } from './interceptors/error-handler.interceptor';
import { EventsModule } from '../features/events/events.module';
import { HeroSectionComponent } from './hero-section/hero-section.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    NotFoundPageComponent,
    HeroSectionComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    EventsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    NotFoundPageComponent,
    HeroSectionComponent
  ]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        UserService,
        storageServiceProvider,
        {
          provide: HTTP_INTERCEPTORS,
          multi: true,
          useClass: AuthInterceptor
        },
        {
          provide: HTTP_INTERCEPTORS,
          multi: true,
          useClass: ErrorHandlerInterceptor
        }
      ]
    }
  }
}

