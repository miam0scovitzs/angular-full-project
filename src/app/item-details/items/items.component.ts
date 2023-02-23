import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from 'src/app/user-data.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  createItem: any = {}
  allItems:any

  constructor(private userDataService: UserDataService,private router:Router) { }

  ngOnInit(): void {
    this.onCome()
  }

  onClick() {
    this.userDataService.createItems(this.createItem).subscribe((data: any) => {
      this.userDataService.createForItem = data
    
      alert("item creation successfull")
      this.onCome()

    })
  }

  

 onDelete(id:String){
  console.log(id)
  this.userDataService.deleteItem(id).subscribe((data:any)=>{
  console.log(data)
  this.onCome()
  alert(data.msg)
  })
} 
onCome(){this.userDataService.getItems().subscribe((data:any)=>{
  console.log(data)
  this.allItems = data
})
}
 onUpdate(obj:any){
  this.userDataService.itemToBeUpdate=obj
  this.router.navigate(['/updateItem'])
 }
}
