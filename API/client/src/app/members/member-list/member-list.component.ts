import { Component, OnInit, inject } from '@angular/core';
import { MembersService } from '../../_Service/members.service';
import { Member } from '../../_model/member';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-member-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './member-list.component.html',
  styleUrl: './member-list.component.css'
})
export class MemberListComponent implements OnInit {
  members: Member[] = [];

  constructor(private membersService: MembersService) { }

  ngOnInit(): void {
    this.membersService.getMembers().subscribe({
      next: members => this.members = members,
      error: err => console.error('Failed to load members', err)
    });
  }
  trackByMemberId(index: number, member: Member): number {
    return member.id;
  }
}
