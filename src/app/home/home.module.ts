import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomePageComponent} from "./home-page/home-page.component";
import {HomeComponent} from "./component/home/home.component";
import {SigninComponent} from "./component/signin/signin.component";
import {SharedModule} from "../shared/shared.module";
import {HomeRoutingModule} from "./home-routing.module";
import { UpdateUserPageComponent } from './update-user-page/update-user-page.component';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [
    HomePageComponent,
    HomeComponent,
    SigninComponent,
    UpdateUserPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    CoreModule
  ]
})
export class HomeModule { }
