import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {routerUrlConstant} from "./constant";
import {MovieDetailResolver} from "./core/resolver/movie-detail.resolver";
import {CoreModule} from "./core/core.module";
import {AuthGuard} from "./core/guard/auth.guard";

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
  },
  {
    path: "home",
    redirectTo: "",
    pathMatch: "full",
  },

  {
    path: routerUrlConstant.REGISTER,
    loadChildren: () => import('./register/register.module').then(m => m.RegisterModule)
  },
  {
    path: routerUrlConstant.MOVIELIST,
    loadChildren: () => import('./movielist/movielist.module').then(m => m.MovielistModule),
    canActivate: [AuthGuard],
  },
  {
    path: routerUrlConstant.MOVIEDETAIL,
    loadChildren: () => import('./moviedetail/movie-detail.module').then(m => m.MovieDetailModule),
    resolve: {
      movieDetail: MovieDetailResolver
    },
    canActivate: [AuthGuard],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes), CoreModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
