import { Routes } from '@angular/router';
import { DepartmentListComponent } from './department/department-list/department-list.component';
import { StudentListComponent } from './student/student-list/student-list.component';

export const routes: Routes = [
  { path:'department',component:DepartmentListComponent},
  { path:'student',component:StudentListComponent},
];
