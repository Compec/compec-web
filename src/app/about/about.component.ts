import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service';
import {TeamMember} from '../models/team-member';

import { Meta } from '@angular/platform-browser';
import {BackendService} from '../services/backend.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.scss']
})
export class AboutComponent implements OnInit {

  team_yk: Observable<TeamMember[]>;

  constructor(private dataService: DataService,
              private backendService: BackendService,
              private meta: Meta) { }

  ngOnInit() {

    this.meta.addTags([
      {name: 'description', content: 'Bizi tanımak ister misiniz?'},
      {name: 'title', content: 'Hakkımızda | Boğaziçi Üniversitesi Bilişim Kulübü'}
    ]);

    this.team_yk = this.backendService.fetchTeamYK();
  }

}
