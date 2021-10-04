import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-image-add',
  templateUrl: './image-add.component.html',
  styleUrls: ['./image-add.component.css']
})
export class ImageAddComponent implements OnInit {
  cars:Car[]
  imageAddForm:FormGroup
  imageFile:File[]
  carId:number
  constructor(private carService:CarService,private formBuilder:FormBuilder,
    private activatedRoute:ActivatedRoute,private toastrService:ToastrService,
    private imageService:ImageService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params)=>{
      if (params['carId']){
      this.carId=Number(params['carId']);
      console.log(this.carId);
      }
    });

    this.GetCars()
    this.createImageAddForm();
  }

  GetCars(){
    this.carService.getCars().subscribe(response=>{
      this.cars=response.data
    })
    }
createImageAddForm(){
this.imageAddForm=this.formBuilder.group({
  carId: ['', Validators.nullValidator],
  file:['',Validators.required]
});

}

upload(event:any){
  this.imageFile=event.target.files;
}

addImage(){
if (this.imageAddForm.valid){
console.log("BURDA");

let imageModel=Object.assign({},this.imageAddForm.value);
if (this.carId!=null){
this.imageAddById(this.carId)
}
else if (this.carId==null)
{
  this.imageAddById(imageModel.carId)
}
else {
  this.toastrService.error("Hata")
}
}
}
imageAddById(carId:Number){
console.log("ŞURDA");

for (let index = 0; index < this.imageFile.length; index++) {
 this.imageService.add(this.carId,this.imageFile[index]).subscribe(response=>{
  this.toastrService.success(response.message)  
 }
 )
  
}


}

}
