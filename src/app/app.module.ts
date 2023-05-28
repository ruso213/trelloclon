import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { BttnGrnComponent } from './components/bttn-grn/bttn-grn.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BoardsPageComponent } from './pages/boards-page/boards-page.component';
import { AccountTargetComponent } from './components/account-target/account-target.component';
import {OverlayModule} from '@angular/cdk/overlay';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BarraLateralComponent } from './components/barra-lateral/barra-lateral.component';
import { CuadroBComponent } from './components/cuadro-b/cuadro-b.component';
import { PageBoardsComponent } from './components/page-boards/page-boards.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BttnGrnComponent,
    NavBarComponent,
    BoardsPageComponent,
    AccountTargetComponent,
    BarraLateralComponent,
    CuadroBComponent,
    PageBoardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OverlayModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
