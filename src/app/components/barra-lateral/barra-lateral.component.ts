import { Component } from '@angular/core';
import {faSquareCaretUp, faPlus, faChevronDown} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-barra-lateral',
  templateUrl: './barra-lateral.component.html',
})
export class BarraLateralComponent {
  faSquareCaretDown = faSquareCaretUp
  faplus = faPlus
  faChevronDown = faChevronDown
}
