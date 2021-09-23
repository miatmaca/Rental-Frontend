import { Component, OnInit } from '@angular/core';
import { brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brands:brand[]=[];
  currentBrand:brand;


  constructor(private brandService:BrandService) { }

  
  ngOnInit(): void {
    this.getCars();
  }

  getCars(){

    this.brandService.getBrands().subscribe(response=>
      {
        this.brands=response.data;

      })
  }

  setCurrentBrand(brand:brand)
  {
    this.currentBrand=brand
  }
getCurrentBrandClass(brand:brand)
{

  if (brand == this.currentBrand)
  {
    return "list-group-item active"
  }
  else {
    return "list-group-item "
  }
}



}
