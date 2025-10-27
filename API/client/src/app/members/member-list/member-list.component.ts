import { Component, OnInit, inject } from '@angular/core';
import { MembersService } from '../../_Service/members.service';
import { Member } from '../../_model/member';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-member-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  members: Member[] = [];

  constructor(private membersService: MembersService) { }

  ngOnInit(): void {
    // Hardcoded member data for testing
    this.members = [
      {
        id: 1,
        username: 'johnDoe',
        age: 28,
        gender: 'Male',
        knownAs: 'John',
        created: new Date('2020-02-10'),
        lastActive: new Date('2023-05-01'),
        photoUrl: 'https://via.placeholder.com/150',
        city: 'New York',
        country: 'USA',
        interests: 'Music, Hiking, Traveling',
        introduction: 'Hello, I am John, a passionate traveler.',
        lookingFor: 'A travel buddy!',
        photos: [

        ]
      },
      {
        id: 3,
        username: 'mikeW',
        age: 32,
        gender: 'Male',
        knownAs: 'Mike',
        created: new Date('2020-06-10'),
        lastActive: new Date('2023-05-05'),
        photoUrl: '',
        city: 'Chicago',
        country: 'USA',
        interests: 'Sports, Fitness',
        introduction: 'I am Mike, I love sports and staying fit.',
        lookingFor: 'A workout partner!',
        photos: [

        ]
      },
      {
        id: 3,
        username: 'mikeW',
        age: 32,
        gender: 'Male',
        knownAs: 'Mike',
        created: new Date('2020-06-10'),
        lastActive: new Date('2023-05-05'),
        photoUrl: '',
        city: 'Chicago',
        country: 'USA',
        interests: 'Sports, Fitness',
        introduction: 'I am Mike, I love sports and staying fit.',
        lookingFor: 'A workout partner!',
        photos: [
         
        ]
      },
      {
        id: 4,
        username: 'emmaR',
        age: 29,
        gender: 'Female',
        knownAs: 'Emma',
        created: new Date('2019-08-25'),
        lastActive: new Date('2023-05-04'),
        photoUrl: '',
        city: 'Miami',
        country: 'USA',
        interests: 'Photography, Fashion',
        introduction: 'Hi, I am Emma! A photographer and fashion enthusiast.',
        lookingFor: 'Someone who shares my love for art.',
        photos: [
         
        ]
      },
      {
        id: 5,
        username: 'lucasB',
        age: 27,
        gender: 'Male',
        knownAs: 'Lucas',
        created: new Date('2020-11-10'),
        lastActive: new Date('2023-05-03'),
        photoUrl: '',
        city: 'Austin',
        country: 'USA',
        interests: 'Music, Movies',
        introduction: 'Hey, I am Lucas. I love music and watching movies.',
        lookingFor: 'Looking for someone to enjoy movies with.',
        photos: [
      
        ]
      },
      {
        id: 6,
        username: 'sarahJ',
        age: 26,
        gender: 'Female',
        knownAs: 'Sarah',
        created: new Date('2022-01-22'),
        lastActive: new Date('2023-05-06'),
        photoUrl: '',
        city: 'Dallas',
        country: 'USA',
        interests: 'Art, Cooking',
        introduction: 'I am Sarah, and I enjoy cooking and art.',
        lookingFor: 'Looking for an art lover.',
        photos: [
         
        ]
      }
    ];
  }

  trackByMemberId(index: number, member: Member): number {
    return member.id;
  }
}
