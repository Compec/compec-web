import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {CompecEvent} from '../models/compec.event';
import {DataService} from '../services/data.service';
import {BackendService} from '../services/backend.service';
import {TeamMember} from '../models/team-member';
import {AngularFirestore} from 'angularfire2/firestore';

@Injectable()
export class AboutGuard implements CanActivate {
  constructor(private backendService: BackendService,
              private dataService: DataService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const observable = new Observable<boolean>((observer) => {
      if (this.dataService.team_yk) {
        observer.next(true);
      }
      this.backendService.fetchTeamYK()
        .subscribe(
          (data: Array<TeamMember>) => {
            this.dataService.team_yk = data;
            observer.next(true);
          },
          (error) => {
            console.log(error);
            observer.next(false);
          }
        );
    });

    return observable;
  }
}
