import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from '../interfaces';
import { StorageService } from './storage.service';

export interface CreateUserDto {
  username: string,
  email: string,
  password: string,
  schoolId: string,
  tel?: string
}

@Injectable()
export class UserService {

  constructor(private storage: StorageService, private httpClient: HttpClient) { }

 
  getProfile$(): Observable<IUser> {
    return this.httpClient.get<IUser>(`${environment.apiUrl}/users/profile`, {withCredentials: true});
  }
  
  updateProfile$(userData: CreateUserDto): Observable<IUser> {
    return this.httpClient.patch<IUser>(`${environment.apiUrl}/users/profile`, userData, {withCredentials: true});
  }
 
}



