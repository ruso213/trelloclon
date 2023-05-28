import { Component } from '@angular/core';
import { faBell, faInfoCircle } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
})
export class NavBarComponent {
  imgClick = false
  faBell = faBell
  faInfoCircle = faInfoCircle
}
