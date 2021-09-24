import { Component, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { Rental } from 'src/app/models/rental';
import { CarService } from 'src/app/services/car.service';
import { CartService } from 'src/app/services/cart.service';
import { RentalService } from 'src/app/services/rental.service';
//import { runInThisContext } from 'vm';



@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: Car[] 
  dataLoaded=false;
  rental:Rental[]
  currentCar:Car
  defaultPath="https://localhost:44376/"
  filterText="";
  bday="";

  constructor(private carService:CarService,         
          private activatedRoute:ActivatedRoute,
          private toastrService:ToastrService,
          private cartService:CartService,
          private rentalService:RentalService
          ) {}

  ngOnInit(): void {
    

    this.activatedRoute.params.subscribe(params=>{
     
      if (params["brandId"]){
      this.getCarsByBrandId(params["brandId"]);
     
      }
      
     if (params["colorId"]){
        this.getCarsByColorId(params["colorId"]);

        }
        
      else
      {
        this.getCars();
      }
    })

   
    
  }
  getPath(){
    return this.defaultPath;
  }
  getCars(){
    
    this.carService.getCars().subscribe(response=>
      
      {this.cars=response.data
      this.dataLoaded=true;
      });
    
  }
  getCarsByBrandId(brandId:number)
  { 
    this.carService.getCarsByBrandId(brandId).subscribe(response=>
      {
        this.cars=response.data      
      
      })
  }
    getCarsByColorId(colorId:number)
  {
    this.carService.getbyColor(colorId).subscribe(response=>
      {
        this.cars=response.data
      }) 

  }




addToCart(car:Car){

  
this.toastrService.success("Sepete Eklendi",car.brandName);
this.cartService.addToCart(car);




}

test(){
this.toastrService.success("Detay Sayfası")
}
  
setCurrentCar(carId:Car)
  {
    this.currentCar=carId
  }

getCurrentCar(carId:Car)
{

  if (carId == this.currentCar)
  {
    return "list-group-item active"
  }
  else {
    return "list-group-item "
  }
  

}

}
