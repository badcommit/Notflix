import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ApiService} from "./service/api/api.service";
import {MovielistService} from "./service/movie/movielist.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {MovieDetailService} from "./service/movie/movie-detail.service";
import {MovieVideoService} from "./service/movie/movie-video.service";
import {MovieCreditService} from "./service/movie/movie-credit.service";
import {MoviePostersService} from "./service/movie/movie-posters.service";
import {MovieDetailResolver} from "./resolver/movie-detail.resolver";
import {AuthGuard} from "./guard/auth.guard";
import {AuthService} from "./service/auth/auth.service";
import {TokenHttpInterceptor} from "./interceptor/token.interceptor";
import {RoleGuard} from "./guard/role.guard";



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    ApiService,
    MovielistService,
    MovieDetailService,
    MovieVideoService,
    MovieCreditService,
    MoviePostersService,
    MovieDetailResolver,
    AuthGuard,
    AuthService,
    RoleGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenHttpInterceptor,
      multi: true
    }

  ]
})
export class CoreModule { }
