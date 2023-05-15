import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { RegistryComponent } from './registry/registry.component';



@NgModule({
  declarations: [
    MainComponent,
    LoginComponent,
    RegistryComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
