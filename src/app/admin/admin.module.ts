import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDetailsComponent } from './admin-details/admin-details.component';
import{RouterModule,Routes} from "@angular/router";
import { FormsModule } from '@angular/forms';
const ROUTES:Routes=[
  {path:'',component:AdminDetailsComponent},
  {path:"creation",loadChildren:()=>import("../create/create.module").then((m)=>m.CreateModule)},
  {path:"update",loadChildren:()=>import("../update/update.module").then((m)=>m.UpdateModule)},
   {path:"items",loadChildren:()=>import("../item-details/item-details.module").then((m)=>m.ItemDetailsModule)}
]


@NgModule({
  declarations: [
    AdminDetailsComponent,
  
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    FormsModule
  ],
  exports:[
    AdminDetailsComponent
  ]
})
export class AdminModule { }
