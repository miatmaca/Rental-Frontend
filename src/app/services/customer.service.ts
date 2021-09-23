import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { ListResponseModel } from '../models/ListResponseModel';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiUrl="https://localhost:44376/api/customers/getall";


  constructor(private HttpClient:HttpClient) { }

getCars():Observable<ListResponseModel<Customer>>
{
  return this.HttpClient.get<ListResponseModel<Customer>>(this.apiUrl);

}

}
