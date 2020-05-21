import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }
  getDate(){
    var date = new Date()
  return date.toDateString();
  }
}
