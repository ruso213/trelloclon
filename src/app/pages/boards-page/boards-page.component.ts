import { Component } from '@angular/core';
import { faChevronDown, faPlus, faSquareCaretUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-boards-page',
  templateUrl: './boards-page.component.html',
})
export class BoardsPageComponent {
  faSquareCaretDown = faSquareCaretUp
  faplus = faPlus
  faChevronDown = faChevronDown
}
