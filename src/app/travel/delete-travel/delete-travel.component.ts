import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { travel } from 'Model/travel';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-delete-travel',
  templateUrl: './delete-travel.component.html',
  styleUrls: ['./delete-travel.component.css']
})
export class DeleteTravelComponent implements OnInit{
  id:number=-1;
  index:number=-1;
  newtravel:travel = new travel;
  constructor(private activatedRoute:ActivatedRoute, private router:Router, private service:ApiserviceService)
  { }
  ngOnInit(){
    this.id=this.activatedRoute.snapshot.params['id'];
    this.service.deletetravel(this.id).subscribe(
      data=>location.href='/viewtravel'
          );      
     
  
  }
}
 
// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';`````````````````````
// import { employee } from 'Model/employee';
// import { ApiserviceService } from 'src/app/apiservice.service';

// @Component({
//   selector: 'app-delete-emp',
//   templateUrl: './delete-emp.component.html',
//   styleUrls: ['./delete-emp.component.css']
// })
// export class DeleteEmpComponent  implements OnInit {
//   id:number=-1;
//   index:number=-1;
//   newEmp:employee = new employee;
//   constructor(private activatedRoute:ActivatedRoute, private router:Router, private service:ApiserviceService)
//   { }
//   ngOnInit(){
//     //console.log(this.list.lstGenre);
//     this.id=this.activatedRoute.snapshot.params['id'];
//     this.service.delete(this.id).subscribe(
//       data=>location.href='/viewemp'
//           );      
     
//     // this.index= this.list.lstGenre.findIndex(g=>g.genreId==this.id);
//     // if(this.index!=-1)
//     // {
//     //   this.list.lstGenre.splice(this.index,1);
//     // }
//     // this.router.navigate(['/viewGenre']);
//     // console.log(this.list.lstGenre);
//   }
// }



