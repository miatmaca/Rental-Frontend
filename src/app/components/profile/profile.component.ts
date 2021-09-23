import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { user } from 'src/app/models/user';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profilForm:FormGroup
  email:string
  firstName:string
  lastName:string
  password:string
  Id:number

  
  constructor(private formBuilder:FormBuilder,
    private userService:UserService,
    private toastrService:ToastrService,
    private router:Router,
    private localStorageService:LocalStorageService
    ) { }

  ngOnInit(): void {
this.createProfileForm();
this.getdetails();


  }


createProfileForm(){
  this.profilForm=this.formBuilder.group({
   Id: ["",Validators.required],
    firstName: ["", Validators.required],
    lastName: ["", Validators.required],
    email: ["", Validators.required],
    password: ['', Validators.required],
    status: true,

  })


}
getdetails(){
this.email=this.localStorageService.get("email")


this.userService.getemailById(this.email).subscribe(response=>{
response.data.forEach(element => {
  this.firstName=element.firstName
  this.lastName=element.lastName
  //this.password=element.password
  this.Id=element.id
});
})
}

profileUpdate(){

if (this.profilForm.valid)
{
let newModel=Object.assign({},this.profilForm.value)
console.log(newModel);

 this.userService.update(newModel).subscribe(response=>{
 
   this.toastrService.success(response.message)

 }
// ,responseError=>{
//   this.toastrService.error(responseError.error.Errors)
// }
)

}
else {
  this.toastrService.error("Bilgileri Kontrol Ediniz")
}
}

}
