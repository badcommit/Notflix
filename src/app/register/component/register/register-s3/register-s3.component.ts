import {Component, Inject, OnInit} from '@angular/core';
import {SUB_PLAN_CONSTANT, SUB_PLAN_PROP_CONSTANT} from "../../../../core/service/token/subplan-constant.service";
import {SubPlanDetail, plan_prop_description, Descriptor, PropDescriptor} from "./subplan";
import {Router} from "@angular/router";
import {ROUTER_URL_CONSTANT} from "../../../../core/service/token/router-constant.token.service";
import {IRouterUrlConstant} from "../../../../constant";


@Component({
  selector: 'app-register-s3',
  templateUrl: './register-s3.component.html',
  styleUrls: ['./register-s3.component.scss']
})
export class RegisterS3Component implements OnInit{
  descs!: [keyof SubPlanDetail, PropDescriptor][]
  selected!: SubPlanDetail
  constructor(private router: Router,  @Inject(ROUTER_URL_CONSTANT) private url_constant: IRouterUrlConstant, @Inject(SUB_PLAN_CONSTANT) public sub_plan: SubPlanDetail[], @Inject(SUB_PLAN_PROP_CONSTANT) public plan_desc: Descriptor<SubPlanDetail>) {
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

  async next(){
    await this.router.navigate([this.url_constant.MOVIELIST])
  }
}
