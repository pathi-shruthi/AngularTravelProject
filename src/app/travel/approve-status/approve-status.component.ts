import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { travel } from 'Model/travel';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-approve-status',
  templateUrl: './approve-status.component.html',
  styleUrls: ['./approve-status.component.css']
})
export class ApproveStatusComponent implements OnInit {
  newtravel: travel = new travel();
  id: number = -1;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private service: ApiserviceService
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.service.getDetailtravel(this.id).subscribe(
      data => {
        this.newtravel = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  approveStatusSubmit() {
    // Update the approve status directly in this.newtravel
    this.newtravel.approveStatus = 'approved'; // Assuming 'approved' is the desired status

    // Send the updated data to the service method
    this.service.edittravel(this.id, this.newtravel).subscribe(
      data => {
        console.log('Status updated:', data);
        this.router.navigate(['/Lsttravel']); // Navigate to the list after updating
      },
      error => {
        console.error('Error updating status', error);
      }
    );
  }
}
