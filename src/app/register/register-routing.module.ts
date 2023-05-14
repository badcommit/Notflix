import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {RegisterPageComponent} from "./register-page/register-page.component";

const routes: Routes = [
  {
    path: "",
    component: RegisterPageComponent
  },
  {
    path: "register",
    loadChildren: () => import('../register/register.module').then(m => m.RegisterModule)
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule{

}
