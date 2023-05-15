import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {MovieDetailPageComponent} from "./movie-detail-page/movie-detail-page.component";

const routes: Routes = [
  {
    path: ":id",
    component: MovieDetailPageComponent
  },

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieDetailRoutingModule{

}
