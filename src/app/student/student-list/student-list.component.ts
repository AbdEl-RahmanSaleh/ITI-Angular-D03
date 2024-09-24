import { Component, OnInit } from '@angular/core';
import { Student } from '../../_models/student';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StudentAddComponent } from "../student-add/student-add.component";
import { StudentDetailsComponent } from "../student-details/student-details.component";

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule, FormsModule, StudentAddComponent, StudentDetailsComponent],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent implements OnInit {
  students:Student[]=[]
  stdDetails:Student= this.students[0]
  constructor(){}
  ngOnInit(): void {
    this.students=[
      new Student(1,"Ahmed",23),
      new Student(2,"Ali",24),
      new Student(3,"Mohammed",25),
      new Student(4,"Sara",22),
    ];
    this.stdDetails = this.students[0]
  }

  Show(id: number) {
    for (let i = 0; i < this.students.length; i++) {
      if (this.students[i].Id == id) {
          this.stdDetails = this.students[i];
          break;
      }
    }
  }

  add(s:Student){
    this.students.push(new Student(s.Id,s.Name,s.Age))
    s = new Student(0,"",0)
  }


}
