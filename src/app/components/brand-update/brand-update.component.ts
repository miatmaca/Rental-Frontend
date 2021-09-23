import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';



@Component({
  selector: 'app-brand-update',
  templateUrl: './brand-update.component.html',
  styleUrls: ['./brand-update.component.css']
})
export class BrandUpdateComponent implements OnInit {
  brandUpdateForm:FormGroup
  brands:brand[]
brandId:number
brandName:string

  constructor(private formBuilder:FormBuilder,
private brandService:BrandService,
private activatedRoute:ActivatedRoute,
private toastrService:ToastrService

  ) { }

  

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
     
      if (params["brandId"]){
      
        this.createBrandForm();
        this.getBrandById(params["brandId"]);
        
      }
      else 
      {
        alert("SAD")
      }
    
      })
}
  createBrandForm(){
    this.brandUpdateForm = this.formBuilder.group({
      brandId:["",Validators.required],
      brandName:["",Validators.required]
    })
  }

 getBrandById(brandId:number){

  this.brandService.getBrandById(brandId).subscribe(response=>{

    this.brands=response.data   
     this.brands.forEach(element => {
        this.brandId=element.brandId
     this.brandName=element.brandName
     }); 

    
  })
 }
 getbrand(brandId:number){

  this.brandService.getBrandById(brandId).subscribe(response=>{

   this.brands=response.data
    
  })}

 brandUpdate()
 {
    if (this.brandUpdateForm.valid)
    {
      let updateModel=Object.assign({},this.brandUpdateForm.value)
      this.brandService.update(updateModel).subscribe(response=>{   

        this.toastrService.success(response.message,"Güncellendi")
        this.getbrand(this.brandId)        

      },responseError=>{
        this.toastrService.error(responseError.error.Errors)

      } )

    }




 }
 
}

