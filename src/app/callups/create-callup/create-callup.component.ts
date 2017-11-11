import { Component } from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

const now = new Date();

@Component({
  selector: 'create-callup',
  templateUrl: './create-callup.component.html',
  styleUrls: ['./create-callup.component.css']
})
export class CreateCallupComponent {
  title = 'myCall';

  model: NgbDateStruct;
  date: {year: number, month: number};

  selectToday() {
    this.model = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
  }
}
