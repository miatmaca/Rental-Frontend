import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { brand } from 'src/app/models/brand';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {
brands:brand[]
  colors:Color[]
carAddForm:FormGroup;
selectedBrand:string
  constructor( private formBuilder:FormBuilder,
   private toastrService:ToastrService,
   private carService:CarService,
   private brandService:BrandService,
   private colorService:ColorService
               
              ) { }
  ngOnInit(): void {
    this.createCarAddForm();
    this.getbrand();
    this.getcolor();
  }
getbrand(){

  this.brandService.getBrands().subscribe(response=>
    {
      this.brands=response.data;

    })

}
getcolor() {
    
  this.colorService.getColors().subscribe((response) => {
    this.colors = response.data;
    
  });
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
   

  }
    
    );
}
else {

this.toastrService.error("Bilgi Formunu Eksiksiz Doldurunuz");

}

}



}


