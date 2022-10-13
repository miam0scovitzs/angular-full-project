import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDetailsComponent } from './admin-details/admin-details.component';
import{RouterModule,Routes} from "@angular/router";
import { FormsModule } from '@angular/forms';
const ROUTES:Routes=[
  {path:'',component:AdminDetailsComponent}
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
