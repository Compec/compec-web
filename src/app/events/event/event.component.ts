import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import {ActivatedRoute, Params} from '@angular/router';
import {CompecEvent} from '../../models/compec.event';
import {Observable} from 'rxjs';
import {BackendService} from '../../services/backend.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  eventName: string;
  eventPage: Observable<CompecEvent | CompecEvent[]>;
  events: Observable<Array<CompecEvent>>;

  constructor(private dataService: DataService,
              private backendService: BackendService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.eventName = this.route.snapshot.params['eventName'];
    this.route.params
      .subscribe(
        (params: Params) => {
          this.eventName = params['eventName'];
          this.eventPage = this.backendService.fetchEvent(this.eventName);
        }
      );
    this.eventPage = this.backendService.fetchEvent(this.eventName);
    this.events = this.backendService.fetchEvents();

  }

}
