import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-add',
  templateUrl: './brand-add.component.html',
  styleUrls: ['./brand-add.component.css']
})
export class BrandAddComponent implements OnInit {

 brandAddForm:FormGroup


  constructor(private formBuilder:FormBuilder,
    private toastrService:ToastrService,
    private brandService:BrandService  ,
  
    
    ) { }

 


  ngOnInit(): void {

    this.createBrandAddForm()
    

  }
  createBrandAddForm(){      
 
    this.brandAddForm=this.formBuilder.group({
    brandName:["",Validators.required],
    
    })

    
  }


add()
{
  if(this.brandAddForm.valid)
  {
    let brandModel=Object.assign({},this.brandAddForm.value)  
    this.brandService.add(brandModel).subscribe(response=>{
        
      this.toastrService.success("Başarılı")
     
    }
     ,responseError=>{
        this.toastrService.error(responseError.error.Message)
      //   for (let index = 0; index < responseError.error.Errors.length; index++) {
      //     this.toastrService.error(responseError.error.Errors[index].ErrorsMessage)
      //  }


     }
    ) }
    else 
    {let car="car"
      this.toastrService.error("Eksik Bilgi")
     

    }


  }
 


}



