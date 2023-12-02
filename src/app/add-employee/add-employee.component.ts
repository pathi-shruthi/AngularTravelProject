import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { employee } from 'Model/employee';
import { ApiserviceService } from '../apiservice.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  newemployee:employee;
  //allEmp:Lstemployee=new Lstemployee();
 
  constructor(private router:Router, private service:ApiserviceService)
  {
    this.newemployee = {employeeId:0, employeeName:'', contact:'',dept:'', address:'',dob: new Date()  }
  }
 
  addEmployee(formValues:NgForm)
  {
    this.service.addemployee(this.newemployee).subscribe(data=>this.newemployee=data, error=>console.log(error));
    location.href = '/Lstemployee';
    console.log(this.newemployee);
    //console.log(formValues);
    //this.allEmp.lstEmp.push(this.newEmp);
    //console.log(this.allEmp.lstEmp);
  }
 
 


}
// export class AddGenreComponent{
//   newGenre:Genre;
//   constructor(private router:Router, private service:ApiserviceService)
//   {
//     this.newGenre={genreId:0,genreCode:'',genreDesc:'',genreType:'old'}
//   }
//   addGenre(formValues:NgForm)
//   {
//     this.service.addGenre(this.newGenre).subscribe(
//       data=>console.log(data),
//       error=>console.log(error)
//     );
//     location.href = '/lstGenre';
//   }
// }



