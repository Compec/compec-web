import { Component, OnInit } from '@angular/core';
import {TeamMember} from '../../models/team-member';
import {Observable} from 'rxjs';
import {BackendService} from '../../services/backend.service';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent implements OnInit {

  team_yk: Observable<TeamMember[]>;

  constructor(private backendService: BackendService) { }

  ngOnInit() {
    this.team_yk = this.backendService.fetchTeamYK();
  }

}
