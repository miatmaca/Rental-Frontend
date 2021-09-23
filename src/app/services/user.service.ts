import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/ListResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { user } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl="https://localhost:44376/api/";
  constructor(private HttpClient:HttpClient) { }


  getemailById(email:string) :Observable<ListResponseModel<user>>{

    let newPath=this.apiUrl+"users/getemailbyid?email="+email
     return this.HttpClient.get<ListResponseModel<user>>(newPath);
   }
   getUserId(userId:number) :Observable<ListResponseModel<user>>{

    let newPath=this.apiUrl+"users/getuserid?id="+userId
     return this.HttpClient.get<ListResponseModel<user>>(newPath);
   }

   update(user:user)
   {
    let newPath=this.apiUrl+"users/update"
    return this.HttpClient.post<ResponseModel>(newPath,user)

   }
}
