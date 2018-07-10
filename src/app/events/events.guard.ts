import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {BackendService} from '../services/backend.service';
import {DataService} from '../services/data.service';
import {CompecEvent} from '../models/compec.event';
import {AngularFirestore} from 'angularfire2/firestore';

@Injectable()
export class EventsGuard implements CanActivate {
  constructor(private backendService: BackendService,
              private dataService: DataService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      const observable = new Observable<boolean>((observer) => {
        if (this.dataService.events){
          observer.next(true);
        } else {
          this.backendService.fetchEvents()
            .subscribe(
              (data: Array<CompecEvent>) => {
                this.dataService.events = data;
                this.dataService.events.forEach(
                  (event: CompecEvent, index: number) => {
                    this.dataService.eventMap[event.shortName.toString()] = index.toString();
                  }
                );
                observer.next(true);
              },
              (error) => {
                console.log(error);
                observer.next(false);
              }
            );
        }

      });

    return observable;
  }
}
