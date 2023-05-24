import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {routerUrlConstant} from './constant';
import {availableSubPlan, plan_prop_description} from "./shared/components/choose-plan/subplan";
import {ROUTER_URL_CONSTANT} from "./core/service/token/router-constant.token.service";
import {SUB_PLAN_CONSTANT, SUB_PLAN_PROP_CONSTANT} from "./core/service/token/subplan-constant.service";

import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    InfiniteScrollModule
  ],
  providers: [
    {
      provide: ROUTER_URL_CONSTANT, useValue: routerUrlConstant,

    },
    {
      provide: SUB_PLAN_CONSTANT, useValue: availableSubPlan,
    },
    {
      provide: SUB_PLAN_PROP_CONSTANT, useValue: plan_prop_description,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
