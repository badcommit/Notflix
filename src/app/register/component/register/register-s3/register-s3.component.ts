import {Component, Inject, Input, OnDestroy, OnInit} from '@angular/core';
import {SUB_PLAN_CONSTANT, SUB_PLAN_PROP_CONSTANT} from "../../../../core/service/token/subplan-constant.service";
import {SubPlanDetail, Descriptor, PropDescriptor} from "./subplan";
import {Router} from "@angular/router";
import {ROUTER_URL_CONSTANT} from "../../../../core/service/token/router-constant.token.service";
import {IRouterUrlConstant} from "../../../../constant";
import {RegForm1} from "../register-s1/register-s1.component";
import {RegForm2} from "../register-s2/register-s2.component";
import {AuthService} from "../../../../core/service/auth/auth.service";
import {Subscription} from "rxjs";


@Component({
  selector: 'app-register-s3',
  templateUrl: './register-s3.component.html',
  styleUrls: ['./register-s3.component.scss']
})
export class RegisterS3Component implements OnInit, OnDestroy {

  @Input()
  regForm!: RegForm1 & RegForm2
  descs!: [keyof SubPlanDetail, PropDescriptor][]
  selected!: SubPlanDetail
  subscription: Subscription|null = null
  constructor(private router: Router,
              private authService: AuthService,
              @Inject(ROUTER_URL_CONSTANT) private url_constant: IRouterUrlConstant,
              @Inject(SUB_PLAN_CONSTANT) public sub_plan: SubPlanDetail[],
              @Inject(SUB_PLAN_PROP_CONSTANT) public plan_desc: Descriptor<SubPlanDetail>,

  ) {
  }

  ngOnInit() {
    this.descs = Object.entries(this.plan_desc)
      .filter(([_, v]) => !v.hidden)
      .sort(([__, v1],  [_, v2]) => v1.order - v2.order) as [keyof SubPlanDetail, PropDescriptor][]
    this.selected = this.sub_plan[0]
  }

  select(plan: SubPlanDetail){
    this.selected = plan
  }

   next(){

    if(!!this.subscription){
      this.subscription.unsubscribe()
    }
    this.subscription = this.authService.register({
      ...this.regForm,
      role: 'USER'
    }).subscribe(v => {

      if(v){
        this.router.navigate(['/movies'])
      } else {
        this.router.navigate(['/register'])
      }
    })
  }

  ngOnDestroy() {
    if(!!this.subscription){
      this.subscription.unsubscribe()
    }
  }
}
