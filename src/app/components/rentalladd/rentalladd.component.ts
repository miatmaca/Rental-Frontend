import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { Customer } from 'src/app/models/customer';
import { Rental } from 'src/app/models/rental';
import { CarService } from 'src/app/services/car.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rentalladd',
  templateUrl: './rentalladd.component.html',
  styleUrls: ['./rentalladd.component.css']
})
export class RentalladdComponent implements OnInit {

  defaultPath="https://localhost:44376/"
  rentals:Rental[]

   constructor(
           private toastrService:ToastrService,
            private rentalService:RentalService,
            private carService:CarService,
            private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    
 this.getrental();

}

getrental()
{
 
    this.rentalService.getRentalDetail().subscribe(response=>{
      
     this.rentals =response.data 
      
     } )
  


}

}
