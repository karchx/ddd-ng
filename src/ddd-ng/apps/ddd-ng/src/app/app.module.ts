import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [AppComponent, DashboardComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MatButtonModule, MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, LayoutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
