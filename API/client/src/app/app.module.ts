import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    CommonModule
  ],
  imports: [
    BrowserModule,
  
  ],
  providers: [provideHttpClient(withFetch()),CommonModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
