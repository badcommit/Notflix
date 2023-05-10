import {IRouterUrlConstant, routerUrlConstant} from "../../constant";
import {InjectionToken} from "@angular/core";




export const ROUTER_URL_CONSTANT = new InjectionToken<IRouterUrlConstant>("router_config", {
  providedIn: "root",
  factory: ()=> {
    return routerUrlConstant
  }
})


