import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../../core/service/auth/auth.service";
import {map} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private router: Router, private authService: AuthService) {
  }

  isLogin$(){
    return this.authService.auth$.pipe(
      map(auth => auth.authToken != null)
    )
  }
}
