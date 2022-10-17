import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from 'src/app/user-data.service';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})

export class UpdateuserComponent implements OnInit {
  
 // user:any={}
  //obj:any={}
  // @Output() event= new EventEmitter<string>()
  constructor(private userDataService:UserDataService,private routes:Router) { }
  allUser:any={}
  userForUpdate:any
  ngOnInit(){
    this.userForUpdate=this.userDataService.userToBeUpdated
    console.log(this.userForUpdate)
 
  }
  

  
   onSave(){
    this.userDataService.updateUser(this.userForUpdate).subscribe((data:any)=>{
      this.onDone()
      alert(data.msg)
    }, ((err)=>{
      alert(err.message)
    }))
   }
   onDone(){
    this.userDataService.getUser().subscribe((data:any)=>{
     // console.log(data)
      this.allUser = data
      this.routes.navigate(['/creation'])
    })
   }
}
