import {Injectable, InjectionToken} from '@angular/core';
import {
  availableSubPlan,
  plan_prop_description,
  Descriptor,
  SubPlanDetail
} from "../../../shared/components/choose-plan/subplan";


export const SUB_PLAN_CONSTANT = new InjectionToken<SubPlanDetail[]>("subplan_confikg", {
  providedIn: "root",
  factory: ()=> {
    return availableSubPlan
  }
})

export const SUB_PLAN_PROP_CONSTANT = new InjectionToken<Descriptor<SubPlanDetail>>("subplan_props_confikg", {
  providedIn: "root",
  factory: ()=> {
    return plan_prop_description
  }
})



