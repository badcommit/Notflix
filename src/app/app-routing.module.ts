import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from "./page/home-page/home-page.component";
import {RegisterPageComponent} from "./page/register-page/register-page.component";
import {routerUrlConstant} from "./constant";
import {MovielistPageComponent} from "./page/movielist-page/movielist-page.component";

const routes: Routes = [
  {path: routerUrlConstant.HOME, component: HomePageComponent},
  {path: routerUrlConstant.LOGIN, component: HomePageComponent},
  {path: routerUrlConstant.REGISTER, component: RegisterPageComponent},
  {path: routerUrlConstant.MOVIELIST, component: MovielistPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
