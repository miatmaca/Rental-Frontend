import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color-add',
  templateUrl: './color-add.component.html',
  styleUrls: ['./color-add.component.css']
})
export class ColorAddComponent implements OnInit {

colorAddForm:FormGroup


  constructor(private formBuilder:FormBuilder,
    private toastrService:ToastrService,
    private colorService:ColorService  
    ) { }

  ngOnInit(): void {

    this.createColorForm()

  }
  createColorForm(){      
 
    this.colorAddForm=this.formBuilder.group({
    colorName:["",Validators.required],
  
    })
  }

add()
{
  if(this.colorAddForm.valid)
  {
    let colorModel=Object.assign({},this.colorAddForm.value)  
    this.colorService.add(colorModel).subscribe(response=>{

      this.toastrService.success("Başarılı")
    })
  }
    else 
    {
this.toastrService.error("Eksik Bilgi")

    }


  }


}