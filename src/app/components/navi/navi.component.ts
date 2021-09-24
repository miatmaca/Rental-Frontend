import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Toast, ToastrService } from 'ngx-toastr';
import { OperationClaim } from 'src/app/models/operationClaim';
import { user } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {
user:user[]
authenticated :boolean
claims:OperationClaim[]

  constructor(private localStorageService:LocalStorageService,
    private userService:UserService,
    private toastrService:ToastrService,
    private router:Router,
    private authService:AuthService) { }

  ngOnInit(): void {
  this.IsAuthenticated();
this.getByUserId();
this.getUserClaimById()
  }
  
  

   IsAuthenticated(){
    if (this.authService.isAuthenticated()) {

      this.authenticated  = true;
    } else {
      this.authenticated  = false;
    }
  


   }
   getByUserId() {
    this.userService.getUserId(Number(this.localStorageService.get('userId')))
      .subscribe((response) => {
        this.user = response.data;     
      });
  }
    getUserClaimById(){
      this.userService.getUserClaimById(Number(this.localStorageService.get('customerId'))).subscribe(response=>{
        this.claims=response.data
        console.log(response.data);
        
      })

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
