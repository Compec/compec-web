import {Component, OnInit} from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

const cookieSubs = 'compec-subscribed';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  emailPopupOpen;

  constructor(private cookieService: CookieService){
  }
  ngOnInit() {
    if (!this.cookieService.check(cookieSubs)) {
      // Do not show popup for the first visit
      this.emailPopupOpen = false;
      this.cookieService.set(cookieSubs, 'no');
    } else if (this.cookieService.get(cookieSubs) === 'yes') {
      // If subscribed before
      this.emailPopupOpen = false;
    } else {
      this.emailPopupOpen = true;
    }
  }
  closePopup(){
    this.emailPopupOpen = false;
  }
}
