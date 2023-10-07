import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { chartsReducer } from './state/charts.reducer';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { ChartsPageModule } from './charts-page/page/charts-page.module';
import { SettingsPageModule } from './settings-page/page/settings-page.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NavbarComponent,
    HttpClientModule,
    StoreModule.forRoot({ chartsState: chartsReducer }),
    ChartsPageModule,
    SettingsPageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
