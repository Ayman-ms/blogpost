import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userToEdit: User = { id: 0, userName: '', password: '', email: '', roll: '' };
  constructor(private route: ActivatedRoute, private httpClient: HttpClient,
    private userServic: UsersService, private messageService: MessageService) { }

  userList?: Array<User>;

  ngOnInit(): void {
    this.httpClient.get<Array<User>>('https://localhost:44355/User').subscribe((userListItems) => {
      this.userList = userListItems;
    })
  }

  async deleteUserClick(id: number) {
    let result = await this.userServic.deleteUser(id);

    if (result) {
      this.messageService.clear();
      this.messageService.add({ key: 'c', sticky: true, severity: 'error', summary: 'Are you sure?', detail: 'Confirm to proceed' });
      window.location.reload()
    } else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something false!' });
    }
  }

}