import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-account-target',
  templateUrl: './account-target.component.html'
})
export class AccountTargetComponent {
  @Output() touch= new EventEmitter(true)

  Emit(){
    this.touch.emit(false)
  }
}
