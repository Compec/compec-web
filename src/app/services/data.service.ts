import { Injectable, EventEmitter } from '@angular/core';
import {CompecEvent} from '../models/compec.event';
import {TeamMember} from '../models/team-member';

@Injectable({
  providedIn: 'root'
})
export class DataService {

    events: Array<CompecEvent>;
    eventMap: Object;
    team_yk: Array<TeamMember>;
    toggleToolbar = new EventEmitter<boolean>();
    showSnackbar = new EventEmitter<string>();

    constructor() {
      this.eventMap = {};
    }

    getEvent(eventName: string) {
      return this.events[this.eventMap[eventName]];
    }

    getEvents() {
      return this.events.filter(event => event.show);
    }

}
