import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { Customer } from 'src/app/models/customer';
import { Rental } from 'src/app/models/rental';
import { CarService } from 'src/app/services/car.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rentalladd',
  templateUrl: './rentalladd.component.html',
  styleUrls: ['./rentalladd.component.css']
})
export class RentalladdComponent implements OnInit {

  defaultPath="https://localhost:44376/"

  rentall:Rental[]
  cars:Car[]
  carId:number
  date:Date
  state:string="display:none"
  constructor(
           private toastrService:ToastrService,
            private rentallService:RentalService,
            private carService:CarService,
            private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    
  this.activatedRoute.params.subscribe(params=>{
     
    if (params["carId"]){

  this.getcars(params["carId"]);
    this.carId=params["carId"];
     
   } 
   else
      {
     console.log("merhabna");
     
    }
    })   
    
  }
  getTest()
  {
this.toastrService.success("Ödeme Sayfası")
  }
 
getrentall(){

this.rentallService.getRentalDetail().subscribe(response=>{

this.rentall=response.data;
return this.rentall
});
}

getcars(carId:number)
{
  this.carService.getByCarId(carId).subscribe(response=>{
    
   this.cars =response.data
    return this.rentall
   } )

}
getPath(){
  return this.defaultPath;
}
 
getDateControl()
{
  this.rentallService.getcontrol(this.date,this.carId).subscribe(response=>{
      
     
       this.toastrService.success(response.message)
     this.state="display"
  

     },responseError=>{

     this.toastrService.error(responseError.error.message) 
      this.state="display:none"
     
  } 
  )

}


}
