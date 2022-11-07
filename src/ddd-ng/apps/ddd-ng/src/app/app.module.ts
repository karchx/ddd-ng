import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {DashboardComponent} from './dashboard/dashboard.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {LayoutModule} from '@angular/cdk/layout';

import {AppComponent} from './app.component';
import {NavbarComponent, SidebarComponent} from '@ddd-ng/shared/ui-shell';

@NgModule({
  declarations: [AppComponent, DashboardComponent, SidebarComponent, NavbarComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,

    LayoutModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
