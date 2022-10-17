import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

import { UserDataService } from 'src/app/user-data.service';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.css']
})

export class CreationComponent implements OnInit {
  user:any={}
  allUsers:any
  deleteData:any
  updateData:any={}
  // block=this.user.type==1
 // @Output() event = new EventEmitter<string>()
  constructor(private userDataService:UserDataService, private router:Router) { }
  
  async ngOnInit() {
    // this.user=this.userDataService.createData.msg
    // console.log(this.user)
    // this.userDataService.getUser().subscribe((data:any)=>{
    //   console.log(data)
    //   this.allUsers = data
    //   console.log(this.allUsers)
    // })
    this.onCome();
  }
  
 
  onClick(id:String){
    this.userDataService.deleteUser(id).subscribe((data:any)=>{
    console.log(data)
    this.onCome()
    alert(data.msg)
    })
  } 
  onCome(){this.userDataService.getUser().subscribe((data:any)=>{
    console.log(data)
    this.allUsers = data
  })
 }
  

  onChange(obj:any){
  //  obj=  this.addNewItem(val)
  console.log(obj)
    this.userDataService.userToBeUpdated=obj
       this.router.navigate(['/update'])

    }
  }



