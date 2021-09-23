import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color-update',
  templateUrl: './color-update.component.html',
  styleUrls: ['./color-update.component.css']
})
export class ColorUpdateComponent implements OnInit {
colors:Color[]
colorUpdateForm:FormGroup
colorName:string
colorId:number

  constructor(private toastrService:ToastrService,
    private colorService:ColorService,
   private formBuilder:FormBuilder,
   private activatedRouteService:ActivatedRoute
    ) { }






  ngOnInit(): void {
    this.activatedRouteService.params.subscribe(params=>{
      if (params["colorId"])
     { this.createColorUpdateForm()
      this.getColorById(params["colorId"])
    }

    })
  
    
  }


createColorUpdateForm()
{
  this.colorUpdateForm= this.formBuilder.group({
    colorId:["",Validators.required],
    colorName:["",Validators.required]
  })

}
getColorById(colorId:number){

  this.colorService.getColorById(colorId).subscribe(response=>{

    this.colors=response.data   
     this.colors.forEach(element => {
        this.colorId=element.colorId
        this.colorName=element.colorName
     }); 

    
  })
 }
  colorUpdate()
  {
     if (this.colorUpdateForm.valid)
     {
       let updateModel=Object.assign({},this.colorUpdateForm.value)
       this.colorService.update(updateModel).subscribe(response=>{   
 
         this.toastrService.success(response.message,"Güncellendi")
        // this.getbrand(this.brandId)        
 
       },responseError=>{
         this.toastrService.error(responseError.error.Errors)
 
       } )
 
     }


}}
