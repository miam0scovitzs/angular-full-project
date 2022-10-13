import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
import {  FormsModule} from "@angular/forms";
import { LogInComponent } from './log-in/log-in.component';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';
import { CreateModule } from './create/create.module';
import { UpdateModule } from './update/update.module';


@NgModule({
  declarations: [
    AppComponent,
    LogInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AdminModule,
    UserModule,
    CreateModule,
    UpdateModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
