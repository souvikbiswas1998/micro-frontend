import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class CommonLibService {

  subject: BehaviorSubject<any> = new BehaviorSubject("souvik " + new Date())

  constructor() { }

  commonData(data: any) {
    return this.subject.next(data)
  }

  readData() {
    return this.subject.asObservable()
  }
}
