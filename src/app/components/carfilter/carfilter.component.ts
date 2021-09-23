import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-carfilter',
  templateUrl: './carfilter.component.html',
  styleUrls: ['./carfilter.component.css']
})
export class CarfilterComponent implements OnInit {
  colors:Color[]
  brands:brand[]

  car:Car[]
  selectedBrand:number
  selectedColor:number


  constructor(private brandService:BrandService,
    private colorService:ColorService,
    private carService:CarService ,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    
        this.getCars();
        this.getColors();
      
    

    
  }
  
  getCars(){

    this.brandService.getBrands().subscribe((response)=>{
      this.brands=response.data

    })  
  }
  
  getColors(){

    this.colorService.getColors().subscribe((response)=>{
      this.colors=response.data
    })
  }
  
  getColorOrBrandById(brand:number,color:number){

    this.carService.getColorOrBrandById(brand,color).subscribe((response)=>{
      this.car=response.data

    })

  }
  routingLink()
  {
    if(this.selectedBrand!=null&&this.selectedColor!=null)
    {
      return "/cars/filter/"+this.selectedBrand+"/"+this.selectedColor

    }
    else if(this.selectedBrand!=null&&this.selectedColor==null)
    {

      return "/cars/brand/"+this.selectedBrand
    }
     else if(this.selectedColor!=null&&this.selectedBrand==null)
    {
      return "/cars/color/"+this.selectedColor

    }
    else{

    return "/cars"
    }
 
  }}
