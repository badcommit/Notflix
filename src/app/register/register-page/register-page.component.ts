import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {RegForm1} from "../component/register/register-s1/register-s1.component";
import {RegForm2} from "../component/register/register-s2/register-s2.component";
import {AuthService} from "../../core/service/auth/auth.service";
import {ROLE} from "../../core/service/auth";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit, OnDestroy {
  step: number = 1

  regS1: RegForm1 | null = null
  regS2: RegForm2 | null = null

  subscription!: Subscription


  get regform(): RegForm1 & RegForm2{
    return {
      ...this.regS1!,
      ...this.regS2!
    }
  }

  constructor(private router: Router, private authService: AuthService){
  }

  finish(role: ROLE){
    this.subscription = this.authService.register({
      ...this.regform,
      role
    }).subscribe((success) => {

      if(success){
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

  ngOnDestroy(): void {
    
    if(this.subscription){
      this.subscription.unsubscribe()
    }
  }

  async home(){
    await this.router.navigate(["/"])
  }
}
