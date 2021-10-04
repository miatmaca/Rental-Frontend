import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Toast, ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { OperationClaim } from 'src/app/models/operationClaim';
import { user } from 'src/app/models/user';
import { userOperationClaimDto } from 'src/app/models/userOperationClaimDto';
import { ClaimService } from 'src/app/services/claim.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-claim-add',
  templateUrl: './claim-add.component.html',
  styleUrls: ['./claim-add.component.css']
})
export class ClaimAddComponent implements OnInit {

  claimAddForm:FormGroup
  users:user[]
  claims:OperationClaim[]
  userOperationDtos:userOperationClaimDto[]
  currentCar:userOperationClaimDto;

  constructor(private formBuilder:FormBuilder,
    private userService:UserService,
    private toastrService:ToastrService,
    private claimService:ClaimService) { }

  ngOnInit(): void {
    this.createClaimAddForm()
    this.getClaim()
    this.getUsers()
    this.getAllUserClaimDto()
  }

createClaimAddForm(){
this.claimAddForm=this.formBuilder.group({
operationClaimsId:["",Validators.required],
userId:["",Validators.required]

})
}

getUsers(){
this.userService.getUserAll().subscribe(response=>{
this.users=response.data
})
}
getClaim(){
  this.claimService.getClaim().subscribe(response=>{
this.claims=response.data

  })
  }
  getAllUserClaimDto(){
    this.userService.getAllUserClaimDto().subscribe(response=>{
    this.userOperationDtos=response.data      
    })
    }
add()
{
 if (this.claimAddForm.valid){
   let claimModel=Object.assign({},this.claimAddForm.value)
   this.claimService.add(claimModel).subscribe(response=>{
     this.toastrService.success(response.message,"Başarılı")
},responseError=>{

  this.toastrService.error(responseError.error.message)
})

 }
 else {
this.toastrService.error("Formu Eksiksiz Doldurunuz")
}
}

update()
{
 if (this.claimAddForm.valid){
   let claimModel=Object.assign({},this.claimAddForm.value)
   this.claimService.update(claimModel).subscribe(response=>{
     this.toastrService.success(response.message,"Başarılı")
},responseError=>{

  this.toastrService.error(responseError.error.message)
})

 }
 else {
this.toastrService.error("Formu Eksiksiz Doldurunuz")
}
}

delete(){


}
setCurrentCar(car:userOperationClaimDto)
{
  this.currentCar=car
}
getCurrentCarClass(car:userOperationClaimDto)
{

if (car == this.currentCar)
{
  return "list-group-item active"
}
else {
  return "list-group-item "
}
}

}
