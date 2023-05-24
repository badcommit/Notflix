import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatTableModule} from "@angular/material/table";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {HeaderComponent} from './layout/header/header.component';
import {RouterLink, RouterOutlet} from "@angular/router";
import { PageBgComponent } from './layout/page-bg/page-bg.component';
import {MatDialogModule} from "@angular/material/dialog";
import {CoreModule} from "../core/core.module";
import {ChoosePlanComponent} from "./components/choose-plan/choose-plan.component";


@NgModule({
  declarations: [
    HeaderComponent,
    PageBgComponent,
    ChoosePlanComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    RouterLink,
    RouterOutlet,
  ],
  exports: [
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    HeaderComponent,
    PageBgComponent,
    MatDialogModule,
    ChoosePlanComponent
  ]
})
export class SharedModule {
}
