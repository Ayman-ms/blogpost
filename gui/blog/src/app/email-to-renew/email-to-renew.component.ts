import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../services/users.service';
import {  MessageService } from 'primeng/api';
import { SessionService } from '../services/session.service';


@Component({
  selector: 'app-email-to-renew',
  templateUrl: './email-to-renew.component.html',
  styleUrls: ['./email-to-renew.component.css']
})
export class EmailToRenewComponent implements OnInit {


  emailForm = new FormGroup({
    emailControl: new FormControl(null,
      [Validators.email,
      Validators.required])
  })


  constructor(
    private httpClient: HttpClient,
    private userServier: UsersService,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UsersService,
    private userServic: UsersService,
    public accountService: SessionService,
    private messageService: MessageService,

  ) { }

  ngOnInit(): void { }


  async sendCode() {

    let result = await this.userServic.sendResetPasswordMail(this.emailForm.get('emailControl')?.value);

    if (result) {
      this.messageService.add({ severity: 'success', summary: 'Success..', detail: 'The link has been sent' });

      this.router.navigateByUrl('')
    } else {
      alert("Erorr")
    }

  }
}



function sendCode() {
  throw new Error('Function not implemented.');
}

