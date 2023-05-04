import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from "./page/home-page/home-page.component";
import {SigninComponent} from "./component/signin/signin.component";
import {RegisterPageComponent} from "./page/register-page/register-page.component";

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'register', component: RegisterPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
