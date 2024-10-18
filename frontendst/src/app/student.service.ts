import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

private baseUrl="http://localhost:8001/api/v1/stu";

  constructor(private httpclient:HttpClient) { }

  getStudentList():Observable<Student[]>{
    return this.httpclient.get<Student[]>(`${this.baseUrl}`);


  }
}
