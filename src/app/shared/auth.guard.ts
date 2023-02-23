import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { UserDataService } from '../user-data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private userService:UserDataService, private router:Router){}
  canActivate(){
    if(this.userService.mainData.data){
      return true;
    }
    alert("u are not authorised")
    this.router.navigate(['login'])
    return false;
  }
  
}
