import { NgModule } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import { ViewemployeeComponent } from './view-emp/view-emp.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { DetailemployeeComponent } from './detailemployee/detailemployee.component';
import { EditEmpComponent } from './edit-emp/edit-emp.component';
import { DeleteEmpComponent } from './delete-emp/delete-emp.component';

@NgModule({
  declarations: [
    AddEmployeeComponent,
    ViewemployeeComponent,
    HomeComponent,
    DetailemployeeComponent,
    EditEmpComponent,
    DeleteEmpComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
    

  ]
})
export class EmployeeModule { }

