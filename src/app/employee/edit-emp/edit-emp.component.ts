
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { employee } from 'Model/employee';
import { ApiserviceService } from 'src/app/apiservice.service';

 
@Component({
  selector: 'app-edit-emp',
  templateUrl: './edit-emp.component.html',
  styleUrls: ['./edit-emp.component.css']
})
export class EditEmpComponent implements OnInit {
  newEmp:employee=new employee;
  id:number=0;
  index:number=-1;
  constructor(private activatedRoute:ActivatedRoute,private router:Router,private service:ApiserviceService){}
  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.params['id'];
    this.service.getdetailemployeee(this.id).subscribe(
      data=>this.newEmp=data,
      error=>console.log(error)
     
    );
  }
  editEmp(){
 
    this.service.editEmp(this.id,this.newEmp).subscribe(
      data=>console.log(data),
      error=>console.log(error)
     
    );
    location.href='/ListEmployees';
    }
}
 