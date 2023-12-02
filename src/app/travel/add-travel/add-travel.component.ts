import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { travel } from 'Model/travel';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-add-travel',
  templateUrl: './add-travel.component.html',
  styleUrls: ['./add-travel.component.css']
})
export class AddTravelComponent {
   newtravel:travel;
  //allEmp:Lstemployee=new Lstemployee();
 
 constructor(private router:Router, private service:ApiserviceService)
   {
   this.newtravel = {requestId:0,employeeId:0, fromLocation:'', toLocation:'',requestDate:new Date(), approveStatus:'',bookingStatus:'',currentStatus:''  }
   }
 
   addtravel(formValues:NgForm)
   {
     this.service.addtravel(this.newtravel).subscribe(data=>this.newtravel=data, error=>console.log(error));
     location.href = '/Lsttravel';
    console.log(this.newtravel);
//     //console.log(formValues);
//     //this.alltravel.Lsttravel.push(this.newtravel);
//     //console.log(this.alltravel.Lsttravel);
//   }
 
 


// }

}
}
