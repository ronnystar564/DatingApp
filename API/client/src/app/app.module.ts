import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component'
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { HomeComponent } from './home/home.component'
import { RegisterComponent } from './register/register.component'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    CommonModule,
    NavComponent,
    HomeComponent,
    RegisterComponent

    
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
  
  ],
  providers: [provideHttpClient(withFetch())],
  bootstrap: [AppComponent]
})
export class AppModule { }
