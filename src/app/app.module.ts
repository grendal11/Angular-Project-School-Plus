import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { RouterModule } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { EventsRoutingModule } from './features/events/events-routing.module';
import { FormsModule } from '@angular/forms';
import { EventsModule } from './features/events/events.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    CoreModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    EventsModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
