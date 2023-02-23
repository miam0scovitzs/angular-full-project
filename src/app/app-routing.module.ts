import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { AuthGuard } from 'src/app/shared/auth.guard';

const routes: Routes = [
  { path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component:LogInComponent},
  {path:"admin",loadChildren:()=>import('../app/admin/admin.module').then((mod)=>mod.AdminModule),canActivate:[AuthGuard]},
  
  {path:"user",loadChildren:()=>import("../app/user/user.module").then((mod)=>mod.UserModule), canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
