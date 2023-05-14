import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomePageComponent} from "./home-page/home-page.component";
import {HomeComponent} from "./component/home/home.component";
import {SigninComponent} from "./component/signin/signin.component";
import {SharedModule} from "../shared/shared.module";
import {HomeRoutingModule} from "./home-routing.module";



@NgModule({
  declarations: [
    HomePageComponent,
    HomeComponent,
    SigninComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
