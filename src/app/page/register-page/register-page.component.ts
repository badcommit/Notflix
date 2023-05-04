import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent {
  step = 1

  constructor(private router: Router) {
  }
  signIn() {

  }
  nextStep(){
    this.step += 1
  }

  home(){
    this.router.navigate([""])
  }
}
