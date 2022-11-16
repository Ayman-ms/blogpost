import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { SessionService } from '../services/session.service';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  newPassword = new FormGroup({
    passwordControl: new FormControl(null,
      [Validators.minLength(6),
      Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$"),
      Validators.required])
  })


  userToEdit: User = { id: 0, userName: '', password: '', email: '', roll: '' };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private httpClient: HttpClient,
    private userServic: UsersService,
    public accountService: SessionService,
    private messageService: MessageService
  ) {
    accountService.user.subscribe((u) => {
      this.userToEdit = u;
    });
  }


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

  // password edit

  async passwordChangeClick() {
    let result = await this.userServic.updateUser(this.userToEdit);
    if (result) {
      this.messageService.add({ severity: 'success', summary: 'Success..', detail: 'Password changed' });
      // this.router.navigateByUrl('editUser')
      this.router.navigateByUrl('/singin')
    } else {
      alert("Password not changed")
    }
  }
}