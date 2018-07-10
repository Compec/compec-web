import {Component, Input, OnInit} from '@angular/core';
import {TeamMember} from '../../models/team-member';

@Component({
  selector: 'app-member-profile',
  templateUrl: './member-profile.component.html',
  styleUrls: ['./member-profile.component.scss']
})
export class MemberProfileComponent implements OnInit {

  @Input() member: TeamMember;

  constructor() { }

  ngOnInit() {
  }

}
