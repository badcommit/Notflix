import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RegisterS1Component} from "./component/register/register-s1/register-s1.component";
import {RegisterS2Component} from "./component/register/register-s2/register-s2.component";
import {RegisterS3Component} from "./component/register/register-s3/register-s3.component";
import {RegisterPageComponent} from "./register-page/register-page.component";
import {SharedModule} from "../shared/shared.module";
import {RegisterRoutingModule} from "./register-routing.module";
import {CoreModule} from "../core/core.module";



@NgModule({
  declarations: [
    RegisterS1Component,
    RegisterS2Component,
    RegisterS3Component,
    RegisterPageComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    RegisterRoutingModule
  ]
})
export class RegisterModule { }
