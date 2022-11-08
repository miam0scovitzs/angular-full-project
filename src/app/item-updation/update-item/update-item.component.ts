import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from 'src/app/user-data.service';

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.css']
})
export class UpdateItemComponent implements OnInit {
   allItems:any
  updateItem: any = {}
  constructor(private userDataService: UserDataService,private routes:Router) { }

  ngOnInit(): void {
    this.updateItem = this.userDataService.itemToBeUpdate
  }

  update() {
    this.userDataService.updateItems(this.updateItem).subscribe((data: any) => {
     // console.log(data)
      this.onDone()
      alert(data.msg)
    })
  }
  onDone(){
    this.userDataService.getUser().subscribe((data:any)=>{
     // console.log(data)
      this.allItems = data
      this.routes.navigate(['/items'])
    })
   }
}
