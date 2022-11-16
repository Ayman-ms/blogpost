import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogListComponent } from './blog-list/blog-list.component';
import { CreateBlogpost } from './create-blogpost/create-blogpost.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { NewUserComponent } from './create-user/create-user.component';
import { SinginUserComponent } from './singin-user/singin-user.component';
import { UpdateBlogpostComponent } from './update-blogpost/update-blogpost.component';
import { UsersComponent } from './users/users.component';
import { AuthenticateGuard } from './authenticate-guard';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { EmailToRenewComponent } from './email-to-renew/email-to-renew.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  {
    path: '',
    component: BlogListComponent
  },
  {
    path: 'creatNewItem',
    component: CreateBlogpost,
    canActivate: [AuthenticateGuard]
  },
  {
    path: 'editComponent',
    component: UpdateBlogpostComponent,
    canActivate: [AuthenticateGuard]
  },
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [AuthenticateGuard]
  },
  {
    path: 'newUser',
    component: NewUserComponent,
    canActivate: [AuthenticateGuard]
  },
  {
    path: 'singin',
    component: SinginUserComponent
  },
  {
    path: 'editUser',
    component: UpdateUserComponent,
    canActivate: [AuthenticateGuard]
  },
  {
    path: 'sendcode',
    component: EmailToRenewComponent
  },
  {
    path: 'forgetpassword',
    component: ForgotPasswordComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
