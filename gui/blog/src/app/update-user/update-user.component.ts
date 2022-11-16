import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Message, MessageService } from 'primeng/api';
import { SessionService } from '../services/session.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  userToEdit: User = { id: 0, userName: '', password: '', email: '', roll: '' };
  userIsAdmin = false;
  userLoggedIn = false;
  userForm = new FormGroup({
          
    passwordControl: new FormControl(null,
      [Validators.minLength(6),
      Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$"),
      Validators.required]),

  })
  constructor(private route: ActivatedRoute, private router: Router, private httpClient: HttpClient,
    private userServic: UsersService, public accountService: SessionService, private messageService: MessageService) {
    
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




  userList?: Array<User>;

  ngOnInit(): void {
    this.httpClient.get<Array<User>>('https://localhost:44355/User').subscribe((userListItems) => {
      this.route.queryParams
        .subscribe(params => {
          console.log(params['id']);
          for (let i = 0; i < userListItems.length; i++) {
            if (userListItems[i].id == params['id']) {
              this.userToEdit = userListItems[i];
              break;
            }
          }
        }
        );

    });
  }

  async updateClick() {

    let result = await this.userServic.updateUser(this.userToEdit);
    if (result) {
      this.messageService.add({ severity: 'success', summary: 'Success..', detail: 'User edited' });
      this.router.navigateByUrl('editUser')
      this.router.navigateByUrl('')
    } else {
      alert("Edit not success")
    }
  }
  msgs = new Array<Message>();
  clickMessage() {
    this.messageService.add({ severity: 'info', summary: 'Info', detail: 'User edited' });
  }

}

