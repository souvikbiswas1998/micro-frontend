import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
// import { Observable } from 'rxjs/internal/Observable';
// import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'platform'
})
export class CommonLibService {

  subject: BehaviorSubject<any> = new BehaviorSubject("souvik " + +new Date())

  constructor() { }

  public commonData(data: any) {
    return this.subject.next(data)
  }

  public readData(): Observable<any> {
    return this.subject.asObservable()
  }
}
