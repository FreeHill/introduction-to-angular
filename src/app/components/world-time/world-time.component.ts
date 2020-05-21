import { Component, OnInit } from '@angular/core';
import {DateService} from '../../services/date.service'
@Component({
  selector: 'app-world-time',
  templateUrl: './world-time.component.html',
  styleUrls: ['./world-time.component.css']
})
export class WorldTimeComponent implements OnInit {
  Date: string;
  constructor(private _date: DateService) { }

  ngOnInit(): void {
    this.Date = this._date.getDate()
  }

}
