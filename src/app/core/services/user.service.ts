import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

export interface CreateUserDto {
  username: string,
  email: string,
  password: string,
  tel?: string
}

@Injectable()
export class UserService {

  constructor(private storage: StorageService, private httpClient: HttpClient) { }

 
  // getProfile$(): Observable<IUser> {
  //   return this.httpClient.get<IUser>(`${environment.apiUrl}/users/profile`, {withCredentials: true});
  // }
  
  
}



