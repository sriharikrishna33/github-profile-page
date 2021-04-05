import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserProfile } from 'src/app/Models/user-profile.model';

@Injectable({
  providedIn: 'root',
})
export class ApiRestHandlerService {
  public _userProfile$: BehaviorSubject<UserProfile> = new BehaviorSubject<UserProfile>(
    new UserProfile()
  );
  public _userProfile = this._userProfile$.asObservable();
  constructor(private http: HttpClient) {}

  getRequest(url: any): Observable<any> {
    return this.http.get(url);
  }
  generateRandomNumber(number: number): any {
    var add = 1,
      max = 12 - add; // 12 is the min safe number Math.random() can generate without it starting to pad the end with zeros.

    if (number > max) {
      return this.generateRandomNumber(max) + this.generateRandomNumber(number - max);
    }

    max = Math.pow(10, number + add);
    var min = max / 10; // Math.pow(10, n) basically
    var numbers = Math.floor(Math.random() * (max - min + 1)) + min;

    return ('' + numbers).substring(add);
  }
}
