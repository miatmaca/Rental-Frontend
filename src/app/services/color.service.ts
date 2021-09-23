import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../models/color';
import { ListResponseModel } from '../models/ListResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  apiUrl="https://localhost:44376/api/";


  constructor(private HttpClient:HttpClient) { }
  
  getColors():Observable<ListResponseModel<Color>> {

    let newPath=this.apiUrl+"colors/getall"
    return  this.HttpClient.get<ListResponseModel<Color>>(newPath)
     //Gelen datayı CarResponseModel'ine mapp ediceksin.
   }


   add(color:Color):Observable<ResponseModel>
   {

return this.HttpClient.post<ResponseModel>(this.apiUrl+"colors/add",color)

   }
   update (color:Color):Observable<ResponseModel>
   {
    let newPath=this.apiUrl+"colors/update"
    return this.HttpClient.post<ResponseModel>(newPath,color)

   }
   delete(color:Color):Observable<ResponseModel>
   {
    let newPath=this.apiUrl+"colors/delete"
    return this.HttpClient.post<ResponseModel>(newPath,color)
   }

   getColorById(colorId:Number) :Observable<ListResponseModel<Color>>{

    let newPath=this.apiUrl+"colors/getbycolorid?colorid="+colorId
     return this.HttpClient.get<ListResponseModel<Color>>(newPath);
   }

}

