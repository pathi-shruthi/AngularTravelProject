import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTravelComponent } from './add-travel/add-travel.component';
import { EditTravelComponent } from './edit-travel/edit-travel.component';
import { DeleteTravelComponent } from './delete-travel/delete-travel.component';
import { DetailTravelComponent } from './detail-travel/detail-travel.component';
import { ApproveStatusComponent } from './approve-status/approve-status.component';
import { BookingStatusComponent } from './booking-status/booking-status.component';



@NgModule({
  declarations: [
    AddTravelComponent,
    EditTravelComponent,
    DeleteTravelComponent,
    DetailTravelComponent,
    ApproveStatusComponent,
    BookingStatusComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TravelModule { }
