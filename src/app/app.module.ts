import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {OverlayModule} from '@angular/cdk/overlay';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './website/pages/login/login.component';
import { BttnGrnComponent } from './website/components/bttn-grn/bttn-grn.component';
import { NavBarComponent } from './website/components/nav-bar/nav-bar.component';
import { BoardsPageComponent } from './website/pages/boards-page/boards-page.component';
import { AccountTargetComponent } from './website/components/account-target/account-target.component';
import { BarraLateralComponent } from './website/components/barra-lateral/barra-lateral.component';
import { CuadroBComponent } from './website/components/cuadro-b/cuadro-b.component';
import { PageBoardsComponent } from './website/components/page-boards/page-boards.component';



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
