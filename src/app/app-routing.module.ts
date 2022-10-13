import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';

const routes: Routes = [
  { path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component:LogInComponent},
  {path:"admin",loadChildren:()=>import('../app/admin/admin.module').then((mod)=>mod.AdminModule)},
  
  {path:"user",loadChildren:()=>import("../app/user/user.module").then((mod)=>mod.UserModule)},
  {path:"creation",loadChildren:()=>import("../app/create/create.module").then((m)=>m.CreateModule)},
  {path:"update",loadChildren:()=>import("../app/update/update.module").then((m)=>m.UpdateModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
