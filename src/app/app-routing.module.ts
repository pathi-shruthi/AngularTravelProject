import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ViewemployeeComponent } from './employee/view-emp/view-emp.component';
import { HomeComponent } from './employee/home/home.component';
import { DetailemployeeComponent } from './employee/detailemployee/detailemployee.component';
import { EditEmpComponent } from './employee/edit-emp/edit-emp.component';
import { DeleteEmpComponent } from './employee/delete-emp/delete-emp.component';
import { ViewTravelComponent } from './travel/view-travel/view-travel.component';
import { AddTravelComponent } from './travel/add-travel/add-travel.component';
import { EditTravelComponent } from './travel/edit-travel/edit-travel.component';
import { DetailTravelComponent } from './travel/detail-travel/detail-travel.component';
import { DeleteTravelComponent } from './travel/delete-travel/delete-travel.component';
import { ApproveStatusComponent } from './travel/approve-status/approve-status.component';
import { BookingStatusComponent } from './travel/booking-status/booking-status.component';




const routes: Routes = [{path:"", redirectTo:"home",pathMatch:"full"},
{path:"home",component:HomeComponent},
{path:"addemployee", component:AddEmployeeComponent},
{path:"Lstemployee", component:ViewemployeeComponent},
{path:"detailemployee/:id", component:DetailemployeeComponent},
{path:"edit/:id", component:EditEmpComponent},
{path:"delete/:id", component:DeleteEmpComponent},
{path:"Lsttravel", component:ViewTravelComponent},
{path:"addtravel", component:AddTravelComponent},
{path:"edittravel/:id", component:EditTravelComponent},
{path:"detailtravel/:id", component:DetailTravelComponent},
{path:"deletetravel/:id", component:DeleteTravelComponent},
{path:"approveStatus/:id", component:ApproveStatusComponent},
{path:"bookingStatus/:id", component:BookingStatusComponent}






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
