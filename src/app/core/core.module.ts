import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ApiService} from "./service/api/api.service";
import {MovieService} from "./service/movie/movie.service";
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    ApiService,
    MovieService,
    HttpClientModule,
  ]
})
export class CoreModule { }
