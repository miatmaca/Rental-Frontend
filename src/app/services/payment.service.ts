import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/ListResponseModel';
import { Payment } from '../models/payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  apiUrl="https://localhost:44376/api/";
  constructor(private HttpClient:HttpClient   ) { }


  CardControl(amount:number,fullName:string,cardNumber:string,expMonth:number,expYear:number,cvv:number,cardType:string):Observable<ListResponseModel<Payment>>
  {
    let newPath=this.apiUrl+"credits/getsell?amount="+amount+"&FullName="+fullName+"&CardNumber="+cardNumber+"&ExpMonth="+expMonth+"&ExpYear="+expYear+"&CVV="+cvv+"&CardType="+cardType
    return this.HttpClient.get<ListResponseModel<Payment>>(newPath);
  
    
  }



}
