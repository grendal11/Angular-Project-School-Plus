import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ISchool } from '../interfaces';

const apiUrl = environment.apiUrl;

export interface CreateSchoolDto {
  schoolName: string,
  schoolDistrict: string,
  schoolTown: string
}

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  constructor(private http: HttpClient) { }

  addSchool$(body: CreateSchoolDto): Observable<ISchool> {
    return this.http.post<ISchool>(`${apiUrl}/schools`, body, { withCredentials: true })
  }

  loadSchoolList(): Observable<ISchool[]> {
    return this.http.get<ISchool[]>(`${apiUrl}/schools`);
  }

  loadSchoolById(id: string): Observable<ISchool> {
    return this.http.get<ISchool>(`${apiUrl}/schools/${id}`);
  }

  addTeacher(id: string): Observable<ISchool> {
    return this.http.put<ISchool>(`${apiUrl}/schools/${id}/addteacher`, {}, { withCredentials: true });
  }

  removeTeacher(id: string): Observable<ISchool> {
    return this.http.put<ISchool>(`${apiUrl}/schools/${id}/removeteacher`, {}, { withCredentials: true });
  }

  addStudent(id: string): Observable<ISchool> {
    return this.http.put<ISchool>(`${apiUrl}/schools/${id}/addstudent`, {}, { withCredentials: true });
  }

  removeStudent(id: string): Observable<ISchool> {
    return this.http.put<ISchool>(`${apiUrl}/schools/${id}/removestudent`, {}, { withCredentials: true });
  }

}
