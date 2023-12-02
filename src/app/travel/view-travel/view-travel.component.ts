import { Component, OnInit } from '@angular/core';
import { travel } from 'Model/travel';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-view-travel',
  templateUrl: './view-travel.component.html',
  styleUrls: ['./view-travel.component.css']
})
export class ViewTravelComponent {
  Lsttravel:any;

 
  constructor(private service: ApiserviceService) { }
 
  ngOnInit(): void {
    
    this.service.gettravel().subscribe(data => {
      this.Lsttravel= data;
      console.log(data);
    });
  console.log(this.Lsttravel);
   
  }
  trackByRequestId(index:number,travel:travel):number
  {
    return travel.requestId
  }
 
}
 
 
 

