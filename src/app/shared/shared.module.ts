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
import {BlackHeaderComponent} from './layout/black-header/black-header.component';
import {RouterLink, RouterOutlet} from "@angular/router";


@NgModule({
  declarations: [
    BlackHeaderComponent
  ],
  imports: [
    CommonModule,
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
    HttpClientModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    BlackHeaderComponent,
  ]
})
export class SharedModule {
}
