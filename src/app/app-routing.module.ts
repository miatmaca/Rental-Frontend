import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { BrandDeleteComponent } from './components/brand-delete/brand-delete.component';
import { BrandListComponent } from './components/brand-list/brand-list.component';
import { BrandUpdateComponent } from './components/brand-update/brand-update.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarDeleteComponent } from './components/car-delete/car-delete.component';
import { CarListComponent } from './components/car-list/car-list.component';
import { CarUpdateComponent } from './components/car-update/car-update.component';
import { CarComponent } from './components/car/car.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { ColorDeleteComponent } from './components/color-delete/color-delete.component';
import { ColorListComponent } from './components/color-list/color-list.component';
import { ColorUpdateComponent } from './components/color-update/color-update.component';
import { LoginComponent } from './components/login/login.component';
import { PaymentComponent } from './components/payment/payment.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { RentalComponent } from './components/rental/rental.component';
import { RentalladdComponent } from './components/rentalladd/rentalladd.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [

{path:"",pathMatch:"full",component:CarComponent},
{path:"cars",component:CarComponent},
{path:"cars/brand/:brandId",component:CarComponent},
{path:"cars/color/:colorId",component:CarComponent},
{path:"cars/filter/:carId/:colorId",component:CarComponent},

{path:"cars/list",component:CarListComponent,canActivate:[LoginGuard]},
{path:"cars/add",component:CarAddComponent,canActivate:[LoginGuard]},
{path:"cars/update/:carId",component:CarUpdateComponent,canActivate:[LoginGuard]},
{path:"cars/delete",component:CarDeleteComponent,canActivate:[LoginGuard]},

{path:"brand/add",component:BrandAddComponent,canActivate:[LoginGuard]},
{path:"brand/list",component:BrandListComponent,canActivate:[LoginGuard]},
{path:"brand/update/:brandId",component:BrandUpdateComponent,canActivate:[LoginGuard]},
{path:"brand/delete/:brandId",component:BrandDeleteComponent,canActivate:[LoginGuard]},

{path:"colors/add",component:ColorAddComponent,canActivate:[LoginGuard]},
{path:"colors/list",component:ColorListComponent,canActivate:[LoginGuard]},
{path:"colors/update/:colorId",component:ColorUpdateComponent,canActivate:[LoginGuard]},
{path:"colors/delete/:colorId",component:ColorDeleteComponent,canActivate:[LoginGuard]},

{path:"profile",component:ProfileComponent,canActivate:[LoginGuard]},

{path:"rentalladd",component:RentalladdComponent},
{path:"cars/rental/:carId",component:RentalComponent},

{path:"rental/getbday/:carId",component:CarComponent},
{path:"cars/rentall/:carId",component:CarComponent},

{path:"cars/payment/:dailyPrice",component:PaymentComponent,canActivate:[LoginGuard]},

{path:"login",component:LoginComponent},
{path:"register",component:RegisterComponent},





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
