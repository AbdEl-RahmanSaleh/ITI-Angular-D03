import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DepartmentListComponent } from "./department/department-list/department-list.component";
import { StudentListComponent } from "./student/student-list/student-list.component";
import { NavbarComponent } from "./navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DepartmentListComponent, StudentListComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ITIDemo';
}
