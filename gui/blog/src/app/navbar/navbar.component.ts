
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { User } from '../models/user';
import { SessionService } from '../services/session.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userToEdit: User = { id: 0, userName: '', password: '', email: '', roll: '' };
  userList?: Array<User>;
  userIsAdmin = false;
  userLoggedIn = false;
  constructor(private messageService: MessageService, public accountService: SessionService, private httpClient: HttpClient) {

    accountService.user.subscribe((u) => {
      this.userToEdit = u;
      if (u && u.roll != 'user') {
        this.userIsAdmin = true;
      }
      else {
        this.userIsAdmin = false;
      }

      if (u && u.userName != 'anonymos') {
        this.userLoggedIn = true;
      }
      else {
        this.userLoggedIn = false;
      }
    });
  }
  // ngOnInit(): void {
  //   //throw new Error('Method not implemented.');
  // }
  ngOnInit(): void {
    this.httpClient.get<Array<User>>('https://localhost:44355/User').subscribe((userListItems) => {
      this.userList = userListItems;
    })
  }



}


