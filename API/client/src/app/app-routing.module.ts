import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MemberDetailsComponent } from './members/member-details/member-details.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { MemberListsComponent } from './members/member-lists/member-lists.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'members', component: MemberListsComponent },
  { path: 'members/:id', component: MemberDetailsComponent },
  { path: 'lists', component: ListsComponent },
  { path: 'messages', component:MessagesComponent },
  { path: '**', component: HomeComponent, pathMatch: 'full' },


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes),BsDropdownModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
