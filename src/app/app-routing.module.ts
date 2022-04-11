import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './auth/profile/profile.component';
import { HomePageComponent } from './core/home-page/home-page.component';
import { NotFoundPageComponent } from './core/not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
},
{
    path: 'home',
    component: HomePageComponent 
},
{
    path: '**',
    component: NotFoundPageComponent
}     
];

export const AppRoutingModule = RouterModule.forRoot(routes);
