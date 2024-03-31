import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  bSubject = new BehaviorSubject("jhgf")
  sendData(date: string) {
    this.bSubject.next(date)
  }
  constructor() {
  }

  sharedData() {
    return this.bSubject.asObservable();
  }
}
