import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { ProductsComponent } from './products/products.component';



@NgModule({
  declarations: [
    MainComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
