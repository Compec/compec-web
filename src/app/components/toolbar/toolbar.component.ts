import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: 'toolbar.component.html',
  styleUrls: ['toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  toolbarShown = true;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.toggleToolbar
      .subscribe(
        (toggle) => {
          this.toolbarShown = toggle;
        }
      );
  }
}
