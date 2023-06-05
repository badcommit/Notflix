import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AbstractControl, AsyncValidatorFn, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {debounceTime, Observable, take} from "rxjs";

import { map, switchMap } from 'rxjs/operators';
import {AuthService} from "../../../../core/service/auth/auth.service";

export type RegForm1 = {
  email: string,
  password: string,
}
@Component({
  selector: 'app-register-s1',
  templateUrl: './register-s1.component.html',
  styleUrls: ['./register-s1.component.scss']
})
export class RegisterS1Component implements OnInit{
  @Output()
  nextStep: EventEmitter<RegForm1> = new EventEmitter<RegForm1>()

  regform!: FormGroup
  constructor(private fb: FormBuilder, private auth: AuthService) {
  }

  ngOnInit() {
    this.regform =  this.fb.group({
      email: ['', [Validators.required, Validators.email], this.emailValidator()],
      password: ['', [Validators.required]]
    })
  }

  emailValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<{[key: string]: boolean} | null> => {
      return control.valueChanges.pipe(
        debounceTime(500),
        take(1),
        switchMap(value => {
          return this.auth.checkEmail(value as string).pipe(
            map((res: boolean) => {
              return res ? {emailExists: true}: null;
            })
          )
        })
      )

    }
  }

  get email() {
    return this.regform.get('email')!
  }

  get password(){
    return this.regform.get('password')!
  }

  next() {
      this.nextStep.emit({
        email: this.email.value!,
        password: this.password.value!
      })
  }
}
