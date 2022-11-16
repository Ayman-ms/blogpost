import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user';
import { UsersService } from '../services/users.service';
import { Message, MessageService } from 'primeng/api';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-singi-user',
  templateUrl: './singin-user.component.html',
  styleUrls: ['./singin-user.component.css']
})
export class SinginUserComponent implements OnInit {
  userToLogin: User = { id: 0, userName: '', password: '', email: '', roll: '' };
  msgs = new Array<Message>();
  constructor(private route: ActivatedRoute, private router: Router, private httpClient: HttpClient,
    private userServic: UsersService, private messageService: MessageService, private accountService: SessionService) { }

  ngOnInit(): void {

  }

  async loginClick() {

    let userListItems = await this.userServic.getUserList();
    let login = false;
    let userToLogin: User = {} as any;
    if (userListItems) {
      for (let i = 0; i < userListItems.length; i++) {

        if ((userListItems[i].userName == this.userToLogin.userName || userListItems[i].email == this.userToLogin.email)
          && (userListItems[i].password == await this.sha256(this.userToLogin.password))) {
          login = true;
          userToLogin = userListItems[i];
          this.router.navigateByUrl('')
          localStorage.setItem('user', JSON.stringify(userListItems[i]));
          break;
        }
      }
    }

    if (login) {
      this.accountService.login(userToLogin)
      this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Login success' });
    }
    else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Name or Password false!' });
    }

  }
  async sha256(message: string) {
    // encode as UTF-8
    const msgBuffer = new TextEncoder().encode(message);

    // hash the message
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);

    // convert ArrayBuffer to Array
    const hashArray = Array.from(new Uint8Array(hashBuffer));

    // convert bytes to hex string                  
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
  }
}
