import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    CommonModule,
    NavComponent
    
  ],
  imports: [
    BrowserModule,
  
  ],
  providers: [provideHttpClient(withFetch())],
  bootstrap: [AppComponent]
})
export class AppModule { }
