import {Component, EventEmitter, Inject, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {SUB_PLAN_CONSTANT, SUB_PLAN_PROP_CONSTANT} from "../../../core/service/token/subplan-constant.service";
import {SubPlanDetail, Descriptor, PropDescriptor} from "./subplan";
import {Router} from "@angular/router";
import {ROUTER_URL_CONSTANT} from "../../../core/service/token/router-constant.token.service";
import {IRouterUrlConstant} from "../../../constant";
import {AuthService} from "../../../core/service/auth/auth.service";
import {ROLE} from "../../../core/service/auth";


@Component({
  selector: 'app-choose-plan',
  templateUrl: './choose-plan.component.html',
  styleUrls: ['./choose-plan.component.scss']
})
export class ChoosePlanComponent implements OnInit, OnDestroy {

  @Output()
  planOutput: EventEmitter<ROLE> = new EventEmitter<ROLE>()


  descs!: [keyof SubPlanDetail, PropDescriptor][]
  selected!: SubPlanDetail
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

    this.planOutput.emit(this.selected.role)

  }

  ngOnDestroy() {

  }
}
