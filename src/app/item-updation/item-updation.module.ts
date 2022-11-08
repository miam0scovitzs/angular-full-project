import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateItemComponent } from './update-item/update-item.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const ROUTES:Routes=[
  {path:'',component:UpdateItemComponent}
]

@NgModule({
  declarations: [
    UpdateItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    FormsModule
  ],
  exports:[UpdateItemComponent]
})
export class ItemUpdationModule { }
