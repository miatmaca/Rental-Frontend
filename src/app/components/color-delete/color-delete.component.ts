import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color-delete',
  templateUrl: './color-delete.component.html',
  styleUrls: ['./color-delete.component.css']
})
export class ColorDeleteComponent implements OnInit {
  colorDeleteFrom:FormGroup
  colors:Color[]
  colorId:number
  colorName:string

  constructor(private toastrService:ToastrService,
    private colorService:ColorService,
    private formBuilder:FormBuilder,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
     
      if (params["colorId"]){
      
      this.createColorDeleteForm();
        this.getColorById(params["colorId"]);
        //this.brandId=(params["brandId"])
      }
     
    
  })
  }

  createColorDeleteForm(){      
 
    this.colorDeleteFrom=this.formBuilder.group({
     colorName:["",Validators.required],
     colorId:["",Validators.required],
    
    });
    }
    getColorById(brandId:number)
    {
      this.colorService.getColorById(brandId).subscribe(response=>{
    
        this.colors=response.data
        this.colors.forEach(element => {
        this.colorId=element.colorId
        this.colorName=element.colorName
        });
      })
    
    }
    
    delete(){
      let deleteModel=Object.assign({},this.colorDeleteFrom.value)
      this.colorService.delete(deleteModel).subscribe(response=>{
        this.toastrService.success(response.message)
      }, responseError=>{
    
        this.toastrService.error(responseError.error.Errors)
    
      })
    
    
    
    }
}
