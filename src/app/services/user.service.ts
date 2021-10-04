import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/ListResponseModel';
import { OperationClaim } from '../models/operationClaim';
import { ResponseModel } from '../models/responseModel';
import { user } from '../models/user';
import { userOperationClaimDto } from '../models/userOperationClaimDto';

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
   
   getUserClaimById(userId:number) :Observable<ListResponseModel<OperationClaim>>{

    let newPath=this.apiUrl+ "users/getuserclaimbyid?userId="+userId
     return this.HttpClient.get<ListResponseModel<OperationClaim>>(newPath);
   }
   getUserAll() :Observable<ListResponseModel<user>>{

    let newPath=this.apiUrl+ "users/getall"
     return this.HttpClient.get<ListResponseModel<user>>(newPath);
   }

   getAllUserClaimDto() :Observable<ListResponseModel<userOperationClaimDto>>{

    let newPath=this.apiUrl+ "users/getalluserclaimdto"
     return this.HttpClient.get<ListResponseModel<userOperationClaimDto>>(newPath);
   }

}
