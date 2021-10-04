import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from '../models/ListResponseModel';
import { OperationClaim } from '../models/operationClaim';
import { ResponseModel } from '../models/responseModel';
import { UserOperationClaim } from '../models/userOperationClaim';

@Injectable({
  providedIn: 'root'
})
export class ClaimService {
  apiUrl="https://localhost:44376/api/";
  constructor(private httpClient:HttpClient) { }

getClaim(){
  let newPath=this.apiUrl+"users/getalluserclaim"
return this.httpClient.get<ListResponseModel<OperationClaim>>(newPath)
}
add(claim:UserOperationClaim){
let newPath=this.apiUrl+"useroperationclaims/add"
return this.httpClient.post<ResponseModel>(newPath,claim)
}
update(claim:UserOperationClaim){
  let newPath=this.apiUrl+"useroperationclaims/update"
  return this.httpClient.post<ResponseModel>(newPath,claim)
  }
  delete(claim:UserOperationClaim){
    let newPath=this.apiUrl+"useroperationclaims/delete"
    return this.httpClient.post<ResponseModel>(newPath,claim)
    }
}
