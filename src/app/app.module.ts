import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MapLibModule } from 'map-lib';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MapLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
