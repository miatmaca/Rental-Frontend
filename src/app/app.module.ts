import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{BrowserAnimationsModule} from "@angular/platform-browser/animations"
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  FormsModule } from '@angular/forms';

import { BrandComponent } from './components/brand/brand.component';
import { NaviComponent } from './components/navi/navi.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ColorComponent } from './components/color/color.component';
import { CarComponent } from './components/car/car.component';
import { RouterModule } from '@angular/router';

import { CustomerComponent } from './components/customer/customer.component';
import { RentalComponent } from './components/rental/rental.component';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';

import { ToastrModule } from 'ngx-toastr';

import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { FilterColorPipe } from './pipes/filter-color.pipe';
import { CarfilterComponent } from './components/carfilter/carfilter.component';
import { RentalladdComponent } from './components/rentalladd/rentalladd.component';
import { PaymentComponent } from './components/payment/payment.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { ListComponent } from './components/list/list.component';
import { BrandUpdateComponent } from './components/brand-update/brand-update.component';
import { BrandDeleteComponent } from './components/brand-delete/brand-delete.component';
import { BrandListComponent } from './components/brand-list/brand-list.component';
import { CarDeleteComponent } from './components/car-delete/car-delete.component';
import { CarUpdateComponent } from './components/car-update/car-update.component';
import { CarListComponent } from './components/car-list/car-list.component';
import { ColorDeleteComponent } from './components/color-delete/color-delete.component';
import { ColorUpdateComponent } from './components/color-update/color-update.component';
import { ColorListComponent } from './components/color-list/color-list.component';
import { LoginComponent } from './components/login/login.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { RegisterComponent } from './components/register/register.component';

import { ProfileComponent } from './components/profile/profile.component';
import { CalculateTotalPricePipe } from './pipes/calculate-total-price.pipe';
import { ImageAddComponent } from './components/image-add/image-add.component';
import { ClaimAddComponent } from './components/claim-add/claim-add.component';

@NgModule({
  declarations: [
    AppComponent,
     BrandComponent,
    NaviComponent,
    ColorComponent,   
     CarComponent,
     CustomerComponent,
     RentalComponent,
     VatAddedPipe,
     FilterPipePipe,
     FilterColorPipe,    
     CartSummaryComponent, 
     CarfilterComponent, 
     RentalladdComponent, 
     PaymentComponent, 
     CarAddComponent,
      BrandAddComponent, 
      ColorAddComponent,
       ListComponent,
        BrandUpdateComponent, 
        BrandDeleteComponent,
         BrandListComponent, 
         CarDeleteComponent, 
         CarUpdateComponent, 
         CarListComponent, 
         ColorDeleteComponent,
          ColorUpdateComponent, 
          ColorListComponent, 
          LoginComponent, RegisterComponent, ProfileComponent, CalculateTotalPricePipe, ImageAddComponent, ClaimAddComponent,
             
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    FormsModule,    
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
