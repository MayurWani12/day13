import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']  // Fixed styleUrls
})
export class EmployeeListComponent implements OnInit {

  students: Student[] = [];

  // Fixed constructor syntax
  constructor(private studentservice: StudentService) {}

  ngOnInit(): void {
    this.getStudents();
  }

  // Fixed service method invocation
  private getStudents(): void {
    this.studentservice.getStudentList().subscribe(data => {
      this.students = data;
    });
  }
}
