import {Component, Inject, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {IRouterUrlConstant} from "../../constant";
import {ROUTER_URL_CONSTANT} from "../../core/service/token/router-constant.token.service";
import {RegForm1} from "../component/register/register-s1/register-s1.component";
import {RegForm2} from "../component/register/register-s2/register-s2.component";
import {AuthService} from "../../core/service/auth/auth.service";
import {ROLE} from "../../core/service/auth";

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {
  step = 1

  regS1: RegForm1 | null = null
  regS2: RegForm2 | null = null


  get regform(): RegForm1 & RegForm2{
    return {
      ...this.regS1!,
      ...this.regS2!
    }
  }

  constructor(private router: Router,  @Inject(ROUTER_URL_CONSTANT) private url_constant: IRouterUrlConstant, private authService: AuthService){
  }

  finish(role: ROLE){
    this.authService.register({
      ...this.regform,
      role
    }).subscribe(v => {

      if(v){
        this.router.navigate(['/movies'])
      } else {
        this.router.navigate(['/register'])
      }
    })
  }

  nextPlan(regForm2: RegForm2){
    this.regS2 = regForm2
    this.step += 1

  }
  nextTMDBStep(value: RegForm1){
    this.regS1 = value
    this.step += 1
  }

  ngOnInit(): void {

  }

  async home(){
    await this.router.navigate([this.url_constant.HOME])
  }
}
