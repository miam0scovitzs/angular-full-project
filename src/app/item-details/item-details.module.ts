import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsComponent } from './items/items.component';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UpdateItemComponent } from '../item-updation/update-item/update-item.component';


const ROUTES:Routes=[
  
  {path:'',component:ItemsComponent},
  {path:"updateItem",component:UpdateItemComponent}
]
@NgModule({
  declarations: [
    ItemsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    FormsModule
  ],
  exports:[ItemsComponent]
})
export class ItemDetailsModule { }
