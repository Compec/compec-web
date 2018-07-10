import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent implements OnInit {
  @Input() message: string;
  show = false;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.showSnackbar
      .subscribe(
        (message: string) => {
          this.message = message;
          this.show = true;
          setTimeout(() => {
            this.show = false;
          },3000);
        }
      );
  }

}
