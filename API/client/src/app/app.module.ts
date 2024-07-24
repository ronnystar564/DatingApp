import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClient, provideHttpClient, withFetch } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component'
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { HomeComponent } from './home/home.component'
import { RegisterComponent } from './register/register.component'
import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MemberDetailsComponent } from './members/member-details/member-details.component';
import { ListsComponent } from './lists/lists.component';
import { AppRoutingModule } from './app-routing.module';
import { ToastrModule, provideToastr } from 'ngx-toastr';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CommonModule,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    MessagesComponent,
    MemberListComponent,
    MemberDetailsComponent,
    ListsComponent,
    AppRoutingModule

    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    BsDropdownModule.forRoot(),
    AppRoutingModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
    }),
  
  ],
  providers: [provideHttpClient(withFetch()), provideAnimations(), provideToastr()],
  bootstrap: [AppComponent]
})
export class AppModule { }
