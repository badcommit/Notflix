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
import {ROUTER_URL_CONSTANT} from "../../core/service/token/router-constant.token.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent implements OnInit{
 constructor(private router: Router,  @Inject(ROUTER_URL_CONSTANT) private url_constant: IRouterUrlConstant) {

 }

 ngOnInit() {
 }
}
