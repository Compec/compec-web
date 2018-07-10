import { Component, OnInit } from '@angular/core';
import {BackendService} from '../services/backend.service';
import {CompecEvent} from '../models/compec.event';
import {DataService} from '../services/data.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  events: Observable<CompecEvent[]>;

  constructor(private backendService: BackendService,
              private dataService: DataService) { }

  ngOnInit() {
    this.events = this.backendService.fetchEvents();
  }

}
