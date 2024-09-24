import { Component, EventEmitter, Output } from '@angular/core';
import { Student } from '../../_models/student';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-add',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './student-add.component.html',
  styleUrl: './student-add.component.css'
})
export class StudentAddComponent {
  @Output()
  StudentAdd:EventEmitter<Student> = new EventEmitter<Student>

  newStd : Student = new Student(0,"",0);
  save(){
    this.StudentAdd.emit(this.newStd)
  }
}
