import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private meta: Meta) { }

  ngOnInit() {
    this.meta.addTags([
      {name: 'title', content: 'Bize Ulaşın | Boğaziçi Üniversitesi Bilişim Kulübü'},
      {name: 'description', content: 'Bize ulaşın, iletişim bilgilerimiz burada'}
    ]);
  }

}
