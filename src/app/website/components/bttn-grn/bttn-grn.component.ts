import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bttn-grn',
  templateUrl: './bttn-grn.component.html',
})
export class BttnGrnComponent {
  @Input() typeBttn: 'button'|'submit'| 'reset' = 'button'
  @Input() color = 'primary'

  get colors(){
    return {
      'bg-green-600' : this.color === 'green' ,
      'hover:bg-green-800' : this.color === 'green' ,
      'bg-sky-700' : this.color === 'primary' ,
      'hover:bg-sky-600' : this.color === 'primary' ,
      'bg-red-600' : this.color === 'red' ,
      'hover:bg-red-800' : this.color === 'red' ,
    }
  }
}
