import { Component, Input } from '@angular/core';
import { Student } from '../../_models/student';

@Component({
  selector: 'app-student-details',
  standalone: true,
  imports: [],
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css'
})
export class StudentDetailsComponent {
  @Input({required:true}) stdDetails!:Student

}
