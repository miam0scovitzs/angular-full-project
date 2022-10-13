import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const ROUTES:Routes=[
  {path:'',component:UpdateuserComponent},
  {path:'update',component:UpdateuserComponent}
]


@NgModule({
  declarations: [
    UpdateuserComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    FormsModule
  ],
  exports:[UpdateuserComponent]
})
export class UpdateModule { }
