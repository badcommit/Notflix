import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './page/home-page/home-page.component';
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { SigninComponent } from './component/signin/signin.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import { RegisterS1Component } from './component/register/register-s1/register-s1.component';
import { RegisterPageComponent } from './page/register-page/register-page.component';
import { HomeComponent } from './component/home/home.component';
import { RegisterS2Component } from './component/register/register-s2/register-s2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SigninComponent,
    RegisterS1Component,
    RegisterPageComponent,
    HomeComponent,
    RegisterS2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
