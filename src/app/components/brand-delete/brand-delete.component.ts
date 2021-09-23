import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-delete',
  templateUrl: './brand-delete.component.html',
  styleUrls: ['./brand-delete.component.css']
})
export class BrandDeleteComponent implements OnInit {
brandDeleteForm:FormGroup
brands:brand[]
brandId:number
brandName:string


  constructor(private toastrService:ToastrService,
    private brandService:BrandService,
    private formBuilder:FormBuilder,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
     
      if (params["brandId"]){
      
      this.createBrandDeleteForm();
        this.getBrandById(params["brandId"]);
        //this.brandId=(params["brandId"])
      }
     
    
  })
  }

createBrandDeleteForm(){      
 
this.brandDeleteForm=this.formBuilder.group({
 brandName:["",Validators.required],
 brandId:["",Validators.required],

});
}
getBrandById(brandId:number)
{
  this.brandService.getBrandById(brandId).subscribe(response=>{

    this.brands=response.data
    this.brands.forEach(element => {
    this.brandId=element.brandId
    this.brandName=element.brandName
    });
  })

}

delete(){
  let deleteModel=Object.assign({},this.brandDeleteForm.value)
  this.brandService.delete(deleteModel).subscribe(response=>{
    this.toastrService.success(response.message)
  }, responseError=>{

    this.toastrService.error(responseError.error.Errors)

  })



}}



