import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MovieDetailRoutingModule} from "./moviedetail-routing.module";
import { MovieDetailPageComponent } from './movie-detail-page/movie-detail-page.component';
import {CoreModule} from "../core/core.module";
import {SharedModule} from "../shared/shared.module";
import { MovieTrailerComponent } from './component/movie-trailer/movie-trailer.component';
import {YouTubePlayerModule} from "@angular/youtube-player";
import { MovieDialogComponent } from './component/movie-dialog/movie-dialog.component';


@NgModule({
  declarations: [
    MovieDetailPageComponent,
    MovieTrailerComponent,
    MovieDialogComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    MovieDetailRoutingModule,
    SharedModule,
    YouTubePlayerModule
  ]
})
export class MovieDetailModule { }
