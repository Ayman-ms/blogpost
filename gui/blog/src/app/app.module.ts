import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SinginUserComponent } from './singin-user/singin-user.component';

// PrimeNG
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { MessageService } from 'primeng/api';
import { ListboxModule } from 'primeng/listbox';
import { TableModule } from 'primeng/table';
import { RatingModule } from 'primeng/rating';
import { SlideMenuModule } from 'primeng/slidemenu';
import { ToastModule } from 'primeng/toast';
import { EditorModule } from 'primeng/editor';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from "primeng/divider";
// import { BehaviorSubject, Observable } from 'rxjs';

// my Component
import { NewUserComponent } from './create-user/create-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { CreateBlogpost } from './create-blogpost/create-blogpost.component';
import { UpdateBlogpostComponent } from './update-blogpost/update-blogpost.component';
import { UsersComponent } from './users/users.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';
import "@angular/compiler"
import { AuthenticateGuard } from './authenticate-guard';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { EmailToRenewComponent } from './email-to-renew/email-to-renew.component';
import { AboutComponent } from './about/about.component';




@NgModule({
  declarations: [
    AppComponent,
    CreateBlogpost,
    UpdateBlogpostComponent,
    BlogListComponent,
    UsersComponent,
    UpdateUserComponent,
    NewUserComponent,
    SinginUserComponent,
    FooterComponent,
    NavbarComponent,
    ForgotPasswordComponent,
    EmailToRenewComponent,
    AboutComponent,
  ],

  imports: [
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    MessagesModule,
    MessageModule,
    ToastModule,
    SlideMenuModule,
    ListboxModule,
    TableModule,
    RatingModule,
    EditorModule,
    PasswordModule,
    DividerModule,
    ReactiveFormsModule
    // BehaviorSubject,
    // Observable

  ],

  providers: [MessageService, AuthenticateGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
