import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Password } from 'primeng/password';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  static getItem(arg0: string): string {
    throw new Error('Method not implemented.');
  }

  constructor(private httpClient: HttpClient) { }

  public creatUser(user: User) {
    return this.httpClient.post<User>('https://localhost:44355/User', user).toPromise();
  }

  public updateUser(user: User) {
    return this.httpClient.put<User>('https://localhost:44355/User', user).toPromise();
  }

  public deleteUser(id: number) {
    return this.httpClient.delete<number>('https://localhost:44355/User', { params: { id: id } }).toPromise();
  }
  public getUserList() {
    return this.httpClient.get<Array<User>>('https://localhost:44355/User').toPromise();
  }

  public sendResetPasswordMail(email: string) {
    return this.httpClient.get<Password>('https://localhost:44355/Password?email=' + email).toPromise();
  }

}

