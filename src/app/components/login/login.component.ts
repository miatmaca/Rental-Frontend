import { getMissingNgModuleMetadataErrorData } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators,FormBuilder  } from "@angular/forms";
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginModel } from 'src/app/models/loginModel';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm:FormGroup
userId:number


  constructor(private formBuilder:FormBuilder,
    private toastrService:ToastrService,
    private authService:AuthService,
    private localStorageService:LocalStorageService,
    private userService:UserService,
    private router:Router) { } 

  ngOnInit(): void {
    this.createLoginForm();
  }

createLoginForm(){
this.loginForm=this.formBuilder.group({
email:["",Validators.required],
password:["",Validators.required]



})
}

login (){

if (this.loginForm.valid)
{
let loginModel=Object.assign({},this.loginForm.value)
this.getUserByEmail(this.loginForm.value.email)


this.authService.login(loginModel).subscribe(response=>{
 this.localStorageService.set("token",response.data.token)
 this.localStorageService.set("email",this.loginForm.value.email) 
this.localStorageService.set("customerId",String(this.userId))
this.router.navigate(['/cars']).then((r) => window.location.reload());
  this.toastrService.success(response.message)
 

},responseError=>{
  this.toastrService.error(responseError.error)
  console.log(responseError);
  
}
)}
else 
{
  this.toastrService.show("Bilgileriniz Kontrol Ediniz")
}

}
getUserByEmail(email:string){
  
  this.userService.getemailById(email).subscribe((response) => {
  response.data.forEach(element => {
  this.userId=element.id
});
    console.log(this.userId);   
    });    
  }
}
