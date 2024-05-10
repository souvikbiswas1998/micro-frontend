import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'platform'
})
export class CommonLibService {

  subject: BehaviorSubject<any> = new BehaviorSubject("souvik " + new Date())

  constructor() { }

  commonData(data: any) {
    return this.subject.next(data)
  }

  readData(): Observable<any> {
    return this.subject.asObservable()
  }
}
