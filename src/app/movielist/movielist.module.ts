import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MovieComponent} from "./component/movie/movie.component";
import {MovielistPageComponent} from "./movielist-page/movielist-page.component";
import {SharedModule} from "../shared/shared.module";
import {MovielistRoutingModule} from "./movielist-routing.module";
import {CoreModule} from "../core/core.module";


@NgModule({
  declarations: [
    MovieComponent,
    MovielistPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MovielistRoutingModule,
    CoreModule
  ]
})
export class MovielistModule {
}
