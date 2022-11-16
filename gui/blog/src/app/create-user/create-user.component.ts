import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user';
import { UsersService } from '../services/users.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class NewUserComponent {
  userForm = new FormGroup({
    userNameControl: new FormControl(null,
      Validators.required),

    emailControl: new FormControl(null,
      [Validators.email,
      Validators.required]),

    passwordControl: new FormControl(null,
      [Validators.minLength(6),
      Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$"),
      Validators.required]),
  })

  rightPassword = true;
  allText = true;

  public userToAdd: User = { id: 0, userName: '', password: '', email: '', roll: '' };
  SignupForm: FormGroup | undefined;
  registerForm: any;

  constructor(
    private httpClient: HttpClient,
    private userServier: UsersService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {

  }

  // add new user
  async newUser() {

    let result = await this.userServier.creatUser(this.userToAdd);
    if (result) {
      console.log("add success")
      this.router.navigateByUrl('')
    } else {
      alert("add not success")
    }
  }

  onSubmit() {
    console.log(this.userForm)
  }

}
