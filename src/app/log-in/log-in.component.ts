import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {UserDataService} from "../user-data.service"

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent  {

 
  mainData:any
  email!: String;
  password!:String
 // title = 'logIn';
  constructor(private userDataService:UserDataService,private routes:Router){}
    
  onClick(){
    this.userDataService.getUserData(this.email,this.password)
  //   .subscribe((data:any)=>{
  //      this.userDataService.mainData = data.data
  //     if(data.data == "2") this.routes.navigate(['/creation'])
  //     else this.routes.navigate(['/user'])
      
  // })
     
  }
  

}
