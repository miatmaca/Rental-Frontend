import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private httpClient:HttpClient) { }

add(carId:number,imageFile:File):Observable<ResponseModel>{

const formData=new FormData();
formData.append('carId',carId.toString());
formData.append('Image',imageFile);

let newPath="https://localhost:44376/api/images/add";
return this.httpClient.post<ResponseModel>(newPath,formData)


}

}
