import {Component, Inject} from '@angular/core';
import {Router} from "@angular/router";
import {IRouterUrlConstant} from "../../constant";
import {ROUTER_URL_CONSTANT} from "../../service/token/router-constant.token.service";

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent {
  step = 1

  constructor(private router: Router,  @Inject(ROUTER_URL_CONSTANT) private url_constant: IRouterUrlConstant) {
  }
  async signIn() {
    await this.router.navigate([this.url_constant.LOGIN])
  }
  nextStep(){
    this.step += 1
  }

  async home(){
    await this.router.navigate([this.url_constant.HOME])
  }
}
