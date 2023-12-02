import { Injectable } from '@angular/core';
import { Employee } from 'Model/Employees';
import { employee } from 'Model/employee';
import { Observable, map } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { travel } from 'Model/travel';


@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  editEmployee(id: number, newemployee: employee) {
    throw new Error('Method not implemented.');
  }
  readonly apiUrl='https://localhost:44349/api/';

  constructor(private http:HttpClient) { }
  getemployee():Observable<employee[]>{
    return this.http.get<any[]>(this.apiUrl + 'employee').pipe(
      map((response: any) => response.$values as employee[])
    );
  }

  gettravel():Observable<travel>{
    return this.http.get<any>(this.apiUrl + 'travel').pipe(
      map((response: any) => response.$values as travel)
    );
    }
    getRequestById(requestId: number): Observable<travel> {
      return this.http.get<travel>(this.apiUrl+'Travel/'+requestId);
    }
  //get EmplooyeeDetails
  getdetailemployeee(id:number):Observable<employee>
  {
    return this.http.get<any>(this.apiUrl + 'employee/'+id);
  }
  getDetailtravel(id:number):Observable<travel>{
    return this.http.get<any>(this.apiUrl + 'travel/'+id);
  }
 
  

 //Add Genre
  addemployee(newemployee:employee):Observable<employee>
  {
    return this.http.post<employee>(this.apiUrl+'employee',newemployee);
  }
  addtravel(newtravel:travel):Observable<travel>
  {
    return this.http.post<travel>(this.apiUrl+'travel',newtravel);
  }
  editEmp(id:number,newemp:employee):Observable<employee>{
    return this.http.put<employee>(this.apiUrl + 'Employee/'+id,newemp);
  }
  edittravel(id:number,newtravel:travel):Observable<travel>{
    return this.http.put<travel>(this.apiUrl + 'travel/'+id,newtravel);
  }

  //delete Genre
  delete(id:number):Observable<employee>{
    return this.http.delete<employee>(this.apiUrl + 'Employee/'+id);
  }
  deletetravel(id:number):Observable<travel>{
    return this.http.delete<travel>(this.apiUrl + 'travel/'+id);
  }
  approveStatus(id:number,newTravelrequest:travel):Observable<travel>
  {

  return this.http.put<travel>(this.apiUrl + 'travel/Approve/'+id,newTravelrequest)
  }
 
  //Edit Genre
  bookTravelrequest(id:number,newTravelrequest:travel):Observable<travel>
  {
    return this.http.put<travel>(this.apiUrl + 'travel/book/'+id,newTravelrequest)
  }
  
  
}

  
  

