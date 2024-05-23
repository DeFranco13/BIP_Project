import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginStateSubject = new BehaviorSubject<boolean>(false);
  loginState$ = this.loginStateSubject.asObservable();

  setLoginState(state: boolean): void {
    this.loginStateSubject.next(state);
  }

  getLoginState(): boolean {
    return this.loginStateSubject.value;
  }
}