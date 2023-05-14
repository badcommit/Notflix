import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-register-s2',
  templateUrl: './register-s2.component.html',
  styleUrls: ['./register-s2.component.scss']
})
export class RegisterS2Component {
  @Output()
  nextStep: EventEmitter<void> = new EventEmitter<void>()

  next() {
    this.nextStep.emit()
  }
}
