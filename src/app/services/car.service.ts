import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/ListResponseModel';
import { Carss } from '../models/carss';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  
  apiUrl = 'https://localhost:44376/api/';
  
  
  constructor(private HttpClient: HttpClient) { }


  getCars():Observable<ListResponseModel<Car>> {

    let newPath=this.apiUrl+"cars/cardetails"
   var result=  this.HttpClient.get<ListResponseModel<Car>>(newPath)
     return result;
   
   //Gelen datayı CarResponseModel'ine mapp ediceksin.
  }
  getCarsByBrandId(brandId:number):Observable<ListResponseModel<Car>> {

    let newPath=this.apiUrl+"cars/getbybrand?brandid="+brandId
    var result=  this.HttpClient.get<ListResponseModel<Car>>(newPath)
      return result;
    
    //Gelen datayı CarResponseModel'ine mapp ediceksin.
   }


   getbyColor(colorId:number):Observable<ListResponseModel<Car>>{

    let newPath=this.apiUrl+"cars/getımagebycolorıd?colorId="+colorId
    var result=this.HttpClient.get<ListResponseModel<Car>>(newPath)
    return result      
   }
   getColorOrBrandById(brandId:number,colorId:number):Observable<ListResponseModel<Car>>{

    let newPath=this.apiUrl+"cars/filter/?brandId="+brandId+"&colorId="+colorId
    var result=this.HttpClient.get<ListResponseModel<Car>>(newPath)
    return result
   }

   
   getByCarId(carId:number):Observable<ListResponseModel<Car>>{

    let newPath=this.apiUrl+"cars/getbycarıd?carId="+carId
    var result=this.HttpClient.get<ListResponseModel<Car>>(newPath)
    return result
   }

   add(car:Carss):Observable<ResponseModel>
   {

return this.HttpClient.post<ResponseModel>(this.apiUrl+"cars/add",car)

   }
   update (car:Car):Observable<ResponseModel>
   {
    let newPath=this.apiUrl+"cars/update"
    return this.HttpClient.post<ResponseModel>(newPath,car)

   }
  
}
