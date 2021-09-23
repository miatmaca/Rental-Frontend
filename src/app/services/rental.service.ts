import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { ListResponseModel } from '../models/ListResponseModel';
import { Rental } from '../models/rental';
import { Rentall } from '../models/rentall';
import { ResponseModel } from '../models/responseModel';


@Injectable({
  providedIn: 'root',
})
export class RentalService {
  apiUrl = 'https://localhost:44376/api/';
  constructor(private HttpClient:HttpClient) {}



getRentalDetail():Observable<ListResponseModel<Rental>>
{
  let newPath=this.apiUrl+"rentals/rentaldetails"
  return this.HttpClient.get<ListResponseModel<Rental>>(newPath);

}
getbday(bday:Date):Observable<ListResponseModel<Rentall>>
{
  let newPath=this.apiUrl+"rentals/getdate?date="+bday

  return this.HttpClient.get<ListResponseModel<Rentall>>(newPath)

}
getcontrol (date:Date,carId:number):Observable<ListResponseModel<Rentall>>
{
  let newPath=this.apiUrl+"rentals/getdate?date="+date+"&&carId="+carId

  return this.HttpClient.get<ListResponseModel<Rentall>>(newPath)
 
}
getDateControl (rentDate:Date,returnDate:Date,carId:number):Observable<ListResponseModel<Rentall>>
{
  let newPath=this.apiUrl+"rentals/getcontrol?carId="+carId+"&rentDate="+rentDate+"&returnDate="+returnDate

  return this.HttpClient.get<ListResponseModel<Rentall>>(newPath)
 
}
add(rental:Rentall):Observable<ResponseModel>{

let newPath=this.apiUrl+"rentals/add"
return this.HttpClient.post<ResponseModel>(newPath,rental)

   

}
}