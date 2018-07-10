import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {CompecEvent} from '../models/compec.event';
import {TeamMember} from '../models/team-member';
import {AngularFirestore} from 'angularfire2/firestore';
import {first} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient, private firebaseDB: AngularFirestore) { }

  fetchEvents(): Observable<Array<CompecEvent>> {
    // return this.http.get<Array<CompecEvent>>('/resources/events.json');
    return this.firebaseDB.collection<CompecEvent>('events', ref => ref.where('show', '==', true).orderBy('order')).valueChanges();
  }

  fetchEvent(eventName: string): Observable<CompecEvent | CompecEvent[]> {
    // return this.http.get<Array<CompecEvent>>('/resources/events.json');
    return this.firebaseDB.collection<CompecEvent>('events',
        ref => ref.where('shortName', '==', eventName)
                .limit(1)).valueChanges().pipe(first());
  }

  fetchTeamYK(): Observable<Array<TeamMember>>{
    //return this.http.get<Array<TeamMember>>('/resources/management_yk.json');
    return this.firebaseDB.collection<TeamMember>('team_yk', ref => ref.orderBy('order')).valueChanges();
  }

  saveSubscriber(email: string){
    return this.firebaseDB.collection('subscribers').add({email: email});
  }
}
