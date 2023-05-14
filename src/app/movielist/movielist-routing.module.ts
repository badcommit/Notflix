import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {MovielistPageComponent} from "./movielist-page/movielist-page.component";

const routes: Routes = [
  {
    path: "",
    component: MovielistPageComponent,
  },

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovielistRoutingModule{

}
