import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Payment } from 'src/app/models/payment';
import { Rental } from 'src/app/models/rental';
import { Rentall } from 'src/app/models/rentall';
import { PaymentService } from 'src/app/services/payment.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  creditCartId: number;
  
  expMonth: number;
  expYear: number;
  cvv: number;  
 amount:number

 cardNumber: string;
 cardType: string;
 fullName: string;

 rental:Rentall

 rentalDetailForm:FormGroup
 paymentForm:FormGroup
payments:Payment[]

  constructor(
    private paymentService:PaymentService,
   private toastrService:ToastrService,
    private activatedRoute:ActivatedRoute,
    private formBuilder:FormBuilder,
    private router:Router,
    private rentalService:RentalService,
    ) { }

  ngOnInit(): void {
this.createPaymentForm();
this.createRentalDetailForm();
     this.activatedRoute.params.subscribe(params=>{
      
      this.amount=params["dailyPrice"]
     

   })
    
   }
     createPaymentForm(){
      this.paymentForm= this.formBuilder.group({
        cardNumber:["",Validators.required],
        expMonth:["",Validators.required],
        expYear:["",Validators.required],
        cvv:["",Validators.required],
        cardType:["",Validators.required],
        fullName:["",Validators.required]

     })
    }

    createRentalDetailForm(){
      this.rentalDetailForm= this.formBuilder.group({
        carId:[Number(localStorage.getItem("carId")),Validators.required],
        customerId:[Number(localStorage.getItem("customerId")),Validators.required],
        rentDate:[localStorage.getItem("rentDate"),Validators.required],
        returnDate:[localStorage.getItem("returnDate"),Validators.required],       

     })

     
    }

  CreditControl() {

    if (this.paymentForm.valid && this.rentalDetailForm.valid)
    {

    this.paymentService.CardControl(this.amount,this.fullName,this.cardNumber,this.expMonth,this.expYear,this.cvv,this.cardType).subscribe((response) => {      
     
      this.payments = response.data;            
      this.toastrService.success(response.message)           
       this.router.navigate(["/"])
      setTimeout(() => {
       window.location.reload();
 }, 99900000);


      let newModel=Object.assign(this.rentalDetailForm.value)
      this.rentalService.add(newModel).subscribe(response=>
    {
      this.toastrService.success(response.message)
      this.toastrService.success("Başarılı Kayıt Edildi")
    })

    


    }
    // ,responseError=>{

    //   this.toastrService.error(responseError.error.message)
    // }
    
    );
  }
  else{
    this.toastrService.error("Bilgileri Kontrol Ediniz")
  }
}
}