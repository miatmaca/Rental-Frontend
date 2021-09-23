import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {

  
carAddForm:FormGroup;

  constructor( private formBuilder:FormBuilder,
   private toastrService:ToastrService,
   private carService:CarService,
               
              ) { }
  ngOnInit(): void {
    this.createCarAddForm();
    
  }

createCarAddForm(){      
 
this.carAddForm=this.formBuilder.group({
// brandName:["",Validators.required],
// colorName:["",Validators.required],
modelYear:["",Validators.required],
dailyPrice:["",Validators.required],
description:["",Validators.required],
brandId:["",Validators.required],
colorId:["",Validators.required],


})

}
add(){

if (this.carAddForm.valid)
{ 
   let carModel=Object.assign({},this.carAddForm.value)           
    this.carService.add(carModel).subscribe(response=>{ 
     this.toastrService.success(response.message,"Başarılı")
   

  },  responseError=>{
    //console.log(responseError.error);
   // this.toastrService.error(responseError.error.Message)

    for (let index = 0; index < responseError.error.Errors.length; index++) {

      this.toastrService.error(responseError.error.Errors[index].ErrorMessage)
    }
  }
    
    );
}
else {

this.toastrService.error("Araç Uygun Değil");

}

}



}


