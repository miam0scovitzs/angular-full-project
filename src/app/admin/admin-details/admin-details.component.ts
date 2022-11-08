import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserDataService } from 'src/app/user-data.service';

@Component({
  selector: 'app-admin-details',
  templateUrl: './admin-details.component.html',
  styleUrls: ['./admin-details.component.css']
})
export class AdminDetailsComponent {
  userData: any = {};
  // @Input() userData:any
  allUsers:any

  constructor(private userDataService: UserDataService, private routes: Router) { }

  ngOnInit(): void {
   
    this.onCome();
  }
  onClickCreate() {
    this.userDataService.createUser(this.userData).subscribe((data: any) => {
      this.userDataService.createData = data
      console.log(data)
      alert("successfull")
      // this.routes.navigate(['/creation'])
      
    })
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
  
    this.userDataService.userToBeUpdated=obj
       this.routes.navigate(['/update'])

    }

}
