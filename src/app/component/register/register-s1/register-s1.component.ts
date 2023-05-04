import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-register-s1',
  templateUrl: './register-s1.component.html',
  styleUrls: ['./register-s1.component.scss']
})
export class RegisterS1Component {
  @Output()
  nextStep: EventEmitter<void> = new EventEmitter<void>()

  constructor() {
  }

  next() {
    this.nextStep.emit()
  }
}
