import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  Input,

  OnInit,

} from '@angular/core';
import { Router} from "@angular/router";
import {IRouterUrlConstant, ROOT_SLASH} from "../../constant";
import * as path from 'path-browserify'
import {ROUTER_URL_CONSTANT} from "../../service/token/router-constant.token.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent implements OnInit{
  @Input()
  isSignIn: boolean = false
 constructor(private router: Router,  @Inject(ROUTER_URL_CONSTANT) private url_constant: IRouterUrlConstant) {

 }

 ngOnInit() {
    this.isSignIn = this.router.url === path.join(ROOT_SLASH, this.url_constant.LOGIN)
 }

  async signIn(){
    await this.router.navigate([this.url_constant.LOGIN])
  }

  async home(){
    await this.router.navigate([this.url_constant.HOME])
  }

}
