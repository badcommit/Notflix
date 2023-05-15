import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../core/service/auth/auth.service";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit, OnDestroy {

  submitSubscription: Subscription | null = null
  signInForm!: FormGroup

  constructor(private fb: FormBuilder, private authService: AuthService, private route: Router) {

  }

  ngOnInit() {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  get password() {
    return this.signInForm.get("password")
  }

  get email() {
    return this.signInForm.get("email")
  }

  submit() {

    if (!!this.submitSubscription) {
      this.submitSubscription.unsubscribe()
      this.submitSubscription = null;
    }
    this.submitSubscription = this.authService.login(this.email?.value, this.password?.value)
      .subscribe((res) => {
        if (res) {
          this.route.navigate(['/home'])
        } else {
          this.route.navigate(['/login'])
        }
      })
  }

  ngOnDestroy() {
    if (this.submitSubscription) {
      this.submitSubscription.unsubscribe()
    }
  }

}
