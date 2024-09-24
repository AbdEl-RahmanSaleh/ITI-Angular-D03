import { Component, OnInit } from '@angular/core';
import { Department } from '../../_models/department';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-department-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './department-list.component.html',
  styleUrl: './department-list.component.css'
})
export class DepartmentListComponent implements OnInit{
  departments:Department[]=[]
  deptDetails:Department= this.departments[0]
  currDept:Department = new Department(0,"","",true)
  newDept = new Department(0,"","",true)
  constructor(){}
  ngOnInit(): void {
    this.departments=[
      new Department(1,".net","Smart",true),
      new Department(2,"mern","Alex",false),
      new Department(3,"ai","Mansoura",true),
      new Department(4,"php","Mansoura",true),
    ];
    this.deptDetails = this.departments[0]
  }

  Show(id: number) {
    for (let i = 0; i < this.departments.length; i++) {
      if (this.departments[i].Id == id) {
          this.deptDetails = this.departments[i];
          break;
      }
    }
  }

  add(){
    this.departments.push(new Department(this.newDept.Id,this.newDept.Name,this.newDept.Location,this.newDept.Status))
    this.newDept = new Department(0,"","",true)
  }

  Edit(id:number) {
    for (let i = 0; i < this.departments.length; i++) {
      if (this.departments[i].Id == id) {
        this.departments[i].Name = this.currDept.Name;
        this.departments[i].Location = this.currDept.Location;
        this.departments[i].Status = this.currDept.Status;
        break;
      }
      else{

      }
    }
  }

}
