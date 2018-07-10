import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {BackendService} from '../../services/backend.service';
import {DataService} from '../../services/data.service';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-email-popup',
  templateUrl: './email-popup.component.html',
  styleUrls: ['./email-popup.component.scss']
})
export class EmailPopupComponent implements OnInit {
  email: string;
  @Output() closePopup = new EventEmitter();

  constructor(private backendService: BackendService, private  dataService: DataService, private cookieService: CookieService) { }

  ngOnInit() {
  }

  close(){
    this.closePopup.emit();
  }

  saveSubscriber(){
    this.backendService.saveSubscriber(this.email);
    this.close();
    this.cookieService.set('compec-subscribed', 'yes');
    this.dataService.showSnackbar.emit('Bültenimize abone olduğunuz için teşekkür ederiz!');
  }

}
