import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators
} from "@angular/forms";



export type RegForm2 = {
  username: string
  tmdb_key: string
}
@Component({
  selector: 'app-register-s2',
  templateUrl: './register-s2.component.html',
  styleUrls: ['./register-s2.component.scss']
})
export class RegisterS2Component implements OnInit{


  @Output()
  nextStep: EventEmitter<RegForm2> = new EventEmitter<RegForm2>()

  form!: FormGroup

  constructor(private fb: FormBuilder) {
  }

  get username() {
    return this.form.get('username')!
  }

  get tmdb_key(){
    return this.form.get('tmdb_key')!
  }

  lengthValidator(x: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return control.value.length < x ? {minLength: `length should greater than ${x}`}: null
    }
  }
  ngOnInit() {
    this.form = this.fb.group({
      username: ['', [Validators.required, this.lengthValidator(4)]],
      tmdb_key: ["", [Validators.required, this.lengthValidator(15)]],
    })
  }



  next() {
    this.nextStep.emit({
      username: this.form.value.username,
      tmdb_key: this.form.value.tmdb_key
    })

  }
}
