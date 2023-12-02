import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { travel } from 'Model/travel';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-detail-travel',
  templateUrl: './detail-travel.component.html',
  styleUrls: ['./detail-travel.component.css']
})
export class DetailTravelComponent implements OnInit {
  thistravel:travel=new travel();
  id:number=0;
  constructor(private activateRoute:ActivatedRoute,private service:ApiserviceService)
  {}
  ngOnInit():void{
   this.id =this.activateRoute.snapshot.params['id'];
   this.service.getDetailtravel(this.id).subscribe(data=>this.thistravel=data)
  }
}

 


