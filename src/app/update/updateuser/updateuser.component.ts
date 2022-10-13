import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from 'src/app/user-data.service';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})

export class UpdateuserComponent implements OnInit {
  update:any= {}
  constructor(private userDataService:UserDataService,private routes:Router) { }

  ngOnInit(): void {
  }
   onSave(){
    this.userDataService.updateUser(this.update).subscribe((data:any)=>{
      alert(data.msg)
    }, ((err)=>{
      alert(err.message)
    }))
   }
}
