import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AbstractControl, AsyncValidatorFn, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {debounceTime, distinctUntilChanged, Observable, of, take} from "rxjs";
import {ApiService} from "../../../../core/service/api/api.service";
import { map, switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-register-s1',
  templateUrl: './register-s1.component.html',
  styleUrls: ['./register-s1.component.scss']
})
export class RegisterS1Component implements OnInit{
  @Output()
  nextStep: EventEmitter<void> = new EventEmitter<void>()

  regform!: FormGroup
  constructor(private fb: FormBuilder, private api: ApiService) {
  }

  ngOnInit() {
    this.regform =  this.fb.group({
      email: ['', [Validators.required], this.emailValidator()],
      password: ['', [Validators.required]]
    })
  }

  emailValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<{[key: string]: boolean} | null> => {
      return control.valueChanges.pipe(
        debounceTime(500),
        take(1),
        switchMap(value => {
          return this.api.checkEmail(value as string).pipe(
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
      this.nextStep.emit()
  }
}
