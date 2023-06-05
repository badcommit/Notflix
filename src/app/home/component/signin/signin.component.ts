import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../core/service/auth/auth.service";
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit, OnDestroy {

  submitSubscription: Subscription | null = null
  message?: string|null = null
  redirect?: string | null = null
  signInForm!: FormGroup

  constructor(private fb: FormBuilder, private authService: AuthService, private route: Router, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
    const message = this.activatedRoute.queryParams.subscribe(({message, redirect}: {message?: string, redirect?: string}) => {
      this.message = message
      this.redirect = redirect
    })
  }

  get password() {
    return this.signInForm.get("password")
  }

  get email() {
    return this.signInForm.get("email")
  }

  get emailErrorMessage(){
    let err = ""
    if(this.email?.errors?.required){
      err += "Email is Invalid;"
    }
    if(this.email?.errors?.email){
      err += "Invalid email format;"
    }
    return err
  }

  get passwordErrorMessage(){
    return this.password?.errors?.required ? "Password is Required;" : ""
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
          this.route.navigate(['/login'], {queryParams: {message: 'Unmatch Password'}})
        }
      })
  }

  ngOnDestroy() {
    if (this.submitSubscription) {
      this.submitSubscription.unsubscribe()
    }
  }

}
