import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {routerUrlConstant} from "./constant";

const routes: Routes = [
  {
    path: "home",
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },

  {
    path: routerUrlConstant.REGISTER,
    loadChildren: () => import('./register/register.module').then(m => m.RegisterModule)
  },
  {
    path: routerUrlConstant.MOVIELIST,
    loadChildren: () => import('./movielist/movielist.module').then(m => m.MovielistModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
