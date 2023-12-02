import { Component, OnInit } from '@angular/core';
 import { ActivatedRoute, Router } from '@angular/router';
 import { travel } from 'Model/travel';
 import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
   selector: 'app-edit-travel',
  templateUrl: './edit-travel.component.html',
  styleUrls: ['./edit-travel.component.css']
 })
 export class EditTravelComponent implements OnInit{
  
  newtravel: travel = new travel(); 
  id: number = 0;
  index: number = -1;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private service: ApiserviceService) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.service.getDetailtravel(this.id).subscribe((data: travel) => {
      this.newtravel = data; 
    });
  }

  edittravel() {
    this.service.edittravel(this.id, this.newtravel).subscribe(
      (data) => {
        console.log(data);
        
      },
      (error) => {
        console.log(error);
      
      }
    );
   
  }

 }


