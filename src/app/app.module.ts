import {InjectionToken, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HomePageComponent} from './page/home-page/home-page.component';
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {SigninComponent} from './component/signin/signin.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {RegisterS1Component} from './component/register/register-s1/register-s1.component';
import {RegisterPageComponent} from './page/register-page/register-page.component';
import {HomeComponent} from './component/home/home.component';
import {RegisterS2Component} from './component/register/register-s2/register-s2.component';
import {routerUrlConstant} from './constant';
import {RegisterS3Component} from './component/register/register-s3/register-s3.component';
import {MatTableModule} from "@angular/material/table";
import {availableSubPlan, plan_prop_description} from "./component/register/register-s3/subplan";
import {ROUTER_URL_CONSTANT} from "./service/token/router-constant.token.service";
import {SUB_PLAN_CONSTANT, SUB_PLAN_PROP_CONSTANT} from "./service/token/subplan-constant.service";
import { MovielistPageComponent } from './page/movielist-page/movielist-page.component';
import { MovieComponent } from './component/movie/movie.component';
import { HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SigninComponent,
    RegisterS1Component,
    RegisterPageComponent,
    HomeComponent,
    RegisterS2Component,
    RegisterS3Component,
    MovielistPageComponent,
    MovieComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        MatCheckboxModule,
        MatTableModule,
        HttpClientModule,
        ReactiveFormsModule,
        MatProgressSpinnerModule
    ],
  providers: [
    {
      provide: ROUTER_URL_CONSTANT, useValue: routerUrlConstant,

    },
    {
      provide: SUB_PLAN_CONSTANT, useValue: availableSubPlan,
    },
    {
      provide: SUB_PLAN_PROP_CONSTANT, useValue: plan_prop_description,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
