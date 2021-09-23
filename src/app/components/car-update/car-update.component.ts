import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { Carss } from 'src/app/models/carss';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-update',
  templateUrl: './car-update.component.html',
  styleUrls: ['./car-update.component.css']
})
export class CarUpdateComponent implements OnInit {


brandName:string;
colorName:string;
modelYear:number;
description:string;
brandId:number
dailyPrice:number
colorId:number;
carId:number;

carUpdateForm:FormGroup
cars:Car[]

car:Carss[]
  constructor(private formBuilder:FormBuilder,
    private carService:CarService,
    private activatedRoute:ActivatedRoute,
    private  toastrService:ToastrService
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
if (params["carId"])
{
  this.createCarUpdateForm()
  this.getCarById(params["carId"])
}



    })

    
  }

createCarUpdateForm()
{
  this.carUpdateForm = this.formBuilder.group({
    brandId:["",Validators.required],    
    colorId:["",Validators.required], 
     carId:["",Validators.required], 
      modelYear:["",Validators.required],
         description:["",Validators.required],
    dailyPrice:["",Validators.required],   
  
 
    
 

  })

}
getCarById(carId:number){

  this.carService.getByCarId(carId).subscribe(response=>{

    this.cars=response.data   

     this.cars.forEach(element => {
        this.brandId=element.brandId
     this.brandName=element.brandName
     this.dailyPrice=element.dailyPrice
     this.description=element.description
     this.colorName=element.colorName
     this.modelYear=element.modelYear
     this.colorId=element.colorId
      this.carId=element.carId
     }); 

    
  })
 }

 carUpdate(){

  
     if (this.carUpdateForm.valid)
     {  
        

          let carModel=Object.assign({},this.carUpdateForm.value)   

        this.carService.update(carModel).subscribe(response=>{   
 
          this.toastrService.success(response.message,"Güncellendi")
                
 
       },responseError=>{
          this.toastrService.error(responseError.error.message)
          
        
      } )
     
    }
    else 
    {this.toastrService.error("esntresa")
   }
 
 
 
  
  


 }
}
