import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  isSignIn: boolean = false
 constructor(private router: Router) {
 }

  signIn(){
    this.isSignIn = true;
  }

  home(){
    this.isSignIn = false
    this.router.navigate([""])
  }


}
