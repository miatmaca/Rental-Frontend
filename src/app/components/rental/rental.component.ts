import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Car } from 'src/app/models/car';
import { ListResponseModel } from 'src/app/models/ListResponseModel';
import { Rental } from 'src/app/models/rental';
import { Rentall } from 'src/app/models/rentall';
import { CarService } from 'src/app/services/car.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {
cars:Car[]
defaultPath="https://localhost:44376/"
rentDay: Date;
returnDay: Date;
day:number=1;
result2:Number[]
carId:number
totalPrice:number


  constructor(private rentalService:RentalService ,
    private toastrService:ToastrService,
    private carService:CarService,
    private activatedRoute:ActivatedRoute,
    private routerService:Router,
    private localStorageService:LocalStorageService,

            ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
     
      if (params["carId"]){
  this.carId=params["carId"]
    this.getcars(params["carId"]);  
   
    
  }
})
  }
  
  getcars(carId:number)
  {
    this.carService.getByCarId(carId).subscribe(response=>{
      
     this.cars =response.data
      
     } )
  
  }
  getPath(){
    return this.defaultPath;
  }

  calculateTotalPrice() {
    if (this.rentDay && this.returnDay) {
      let returnDate=new Date(this.returnDay)
      let rentDate=new Date(this.rentDay)
      let rentDaysCount=Math.round((returnDate.getTime()-rentDate.getTime()) / (1000 * 60 * 60 * 24))+1;  
      if (rentDaysCount > 0) {
        this.day=rentDaysCount      
        this.toastrService.success(String(this.day))
              
      }else{
        this.toastrService.error("Geçerli Bir Tarih Girin")
      }
    }
  }
 



  DateControl(){
    
   this.rentalService.getDateControl(this.rentDay,this.returnDay,this.carId).subscribe(response=>{
    this.toastrService.success(response.message)
    this.localStorageService.set("totalPrice",String(this.totalPrice))
    this.localStorageService.set("rentDate",String(this.rentDay))
    this.localStorageService.set("returnDate",String(this.returnDay))
    this.localStorageService.set("carId",String(this.carId))
  //  localStorage.setItem("dailyPrice",JSON.stringify(this.totalPrice))
  // this.routerService.navigate(['/cars/payment']).then(() => window.location.reload());
   
   
   },responseError=>{
     this.toastrService.error(responseError.error.message)
     return false;
   })
 
  }
}

