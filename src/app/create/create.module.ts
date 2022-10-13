import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreationComponent } from './creation/creation.component';
import { RouterModule, Routes } from '@angular/router';

const ROUTES:Routes=[
  {path:'',component:CreationComponent}
]


@NgModule({
  declarations: [
    CreationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
   
  ],
  exports:[CreationComponent]
})
export class CreateModule { }
