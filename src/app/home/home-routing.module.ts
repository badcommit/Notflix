import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomePageComponent} from "./home-page/home-page.component";
import {HomeComponent} from "./component/home/home.component";
import {SigninComponent} from "./component/signin/signin.component";
import {UpdateUserPageComponent} from "./update-user-page/update-user-page.component";
import {AuthGuard} from "../core/guard/auth.guard";
import {RoleGuard} from "../core/guard/role.guard";

const routes: Routes = [
  {
    path: "",
    component: HomePageComponent,
    pathMatch: "full",
    children:[
      {
        path: "",
        component: HomeComponent,
        pathMatch: 'full',
        outlet: "home"
      },
    ]
  },
  {
    path: "login",
    component: HomePageComponent,
    pathMatch: "full",
    children:[
      {
        path: "",
        component: SigninComponent,
        pathMatch: 'full',
        outlet: "home"
      },
    ]
  },
  {
    path: "updateuser",
    component: UpdateUserPageComponent,
    pathMatch: "full",
    canActivate: [AuthGuard],
  }


];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule{

}
