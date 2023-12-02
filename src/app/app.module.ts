import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ViewemployeeComponent } from './employee/view-emp/view-emp.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './employee/home/home.component';
import { EditEmpComponent } from './employee/edit-emp/edit-emp.component';
import { DeleteEmpComponent } from './employee/delete-emp/delete-emp.component';
import { ViewTravelComponent } from './travel/view-travel/view-travel.component';
import { AddTravelComponent } from './travel/add-travel/add-travel.component';
import { EditTravelComponent } from './travel/edit-travel/edit-travel.component';
import { DetailTravelComponent } from './travel/detail-travel/detail-travel.component';
import { DeleteTravelComponent } from './travel/delete-travel/delete-travel.component';
import { HomedetailComponent } from './homedetail/homedetail.component';
import { ApproveStatusComponent } from './travel/approve-status/approve-status.component';
import { BookingStatusComponent } from './travel/booking-status/booking-status.component';


@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    ViewemployeeComponent,
    HomeComponent,
    EditEmpComponent,
    DeleteEmpComponent,
    ViewTravelComponent,
    AddTravelComponent,
    EditTravelComponent,
    DetailTravelComponent,
    DeleteTravelComponent,
    
    HomedetailComponent,
    ApproveStatusComponent,
    BookingStatusComponent

     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
