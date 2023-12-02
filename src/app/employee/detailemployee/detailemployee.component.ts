import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'Model/Employees';
import { employee } from 'Model/employee';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-detailemployee',
  templateUrl: './detailemployee.component.html',
  styleUrls: ['./detailemployee.component.css']
})
export class DetailemployeeComponent implements OnInit {
 
  thisemployee:employee=new employee();
  id:number=0;
  constructor(private activateRoute:ActivatedRoute,private service:ApiserviceService)
  {}
  ngOnInit():void{
   this.id =this.activateRoute.snapshot.params['id'];
   this.service.getdetailemployeee(this.id).subscribe(data=>this.thisemployee=data)
  }
}



