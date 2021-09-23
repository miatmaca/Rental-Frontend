import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { brand } from '../models/brand';
import { ListResponseModel } from '../models/ListResponseModel';
import { ResponseModel } from '../models/responseModel';


@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiUrl="https://localhost:44376/api/";

  constructor(private HttpClient:HttpClient) { }

  getBrands() :Observable<ListResponseModel<brand>>{

   let newPath=this.apiUrl+"brands/getall"
    return this.HttpClient.get<ListResponseModel<brand>>(newPath);
  }

  add(brand:brand):Observable<ResponseModel>
   {

return this.HttpClient.post<ResponseModel>(this.apiUrl+"brands/add",brand)

   }

   getBrandById(brandId:Number) :Observable<ListResponseModel<brand>>{

    let newPath=this.apiUrl+"brands/getbybrand?id="+brandId
     return this.HttpClient.get<ListResponseModel<brand>>(newPath);
   }

   update (brand:brand):Observable<ResponseModel>
   {
    let newPath=this.apiUrl+"brands/update"
    return this.HttpClient.post<ResponseModel>(newPath,brand)

   }
   delete(brand:brand):Observable<ResponseModel>
   {
    let newPath=this.apiUrl+"brands/delete"
    return this.HttpClient.post<ResponseModel>(newPath,brand)
   }
}
