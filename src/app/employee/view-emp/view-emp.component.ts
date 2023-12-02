
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiserviceService } from 'src/app/apiservice.service';
import { Employee } from 'Model/Employees';


 
@Component({
  selector: 'app-view-emp',
  templateUrl: './view-emp.component.html',
  styleUrls: ['./view-emp.component.css']
})
export class ViewemployeeComponent implements OnInit{
   //employeeList: Employee[] = [];
   Lstemployee:any;
 
  constructor(private service: ApiserviceService) { }
 
  ngOnInit(): void {
    this.service.getemployee().subscribe(data => {
      this.Lstemployee= data;
    });
    console.log(this.Lstemployee);
 
   
  }
 

  trackByemployeeId(index:number,employee:any)
  {
    return employee.employeeId
  }
 
}
 
 
 