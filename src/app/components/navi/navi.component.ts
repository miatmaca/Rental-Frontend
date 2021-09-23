import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Toast, ToastrService } from 'ngx-toastr';
import { user } from 'src/app/models/user';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {
result:user[]
  constructor(private localStorageService:LocalStorageService,
    private userService:UserService,
    private toastrService:ToastrService,
    private router:Router) { }

  ngOnInit(): void {
    this.getvalue();
  }
  

  getvalue(){
    

   let userId=localStorage.getItem("customerId")
   if (userId!=null)
   {
   this.userService.getUserId(Number(userId)).subscribe(response=>{
  console.log(response.data);
    this.result=response.data
   })
  }
 
  }
checkId(){
if (localStorage.getItem("customerId"))
{
  return true;
}
else 
{ return false }

}
check(){
  if (localStorage.getItem("customerId"))
  {
    return false;
  }
  else 
  { return true }
  
  }
remove()
{
this.localStorageService.clean();
this.toastrService.success("Başarıyla Çıkış Yapıldı");
this.router.navigate(["/"])
setTimeout(() => {
 window.location.reload();
}, 1000);
}

}
