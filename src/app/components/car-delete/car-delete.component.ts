import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-delete',
  templateUrl: './car-delete.component.html',
  styleUrls: ['./car-delete.component.css']
})
export class CarDeleteComponent implements OnInit {
cars:Car[]
carId:number
carDeleteForm:FormGroup
  constructor(private carService:CarService,
    private toastrService:ToastrService,
    private activatedRoute:ActivatedRoute,
    private formBuilder:FormBuilder) { }

  ngOnInit(): void { this.createCarDeleteForm()
    this.activatedRoute.params.subscribe(params=>{
     
      if (params["carId"]){
      this.getCarById(params["carId"])    
     console.log(
      this.carId=params["carId"]
     )
      
       
      }
      })
     
  }
  createCarDeleteForm(){      
 
    this.carDeleteForm=this.formBuilder.group({
     carId:["",Validators.required],     
    
    });
    }
  getCarById(carId:number){

    this.carService.getByCarId(carId).subscribe(response=>{
      this.cars=response.data

      this.cars.forEach(element => {
        this.carId=element.carId
      });
    })
  }

  delete(){
    let deleteModel=Object.assign({},this.carDeleteForm.value)
    this.carService.delete(deleteModel).subscribe(response=>{
      this.toastrService.success(response.message)
    },responseError=>{

      this.toastrService.error(responseError.error.Message);
    }
  
    )
}}
