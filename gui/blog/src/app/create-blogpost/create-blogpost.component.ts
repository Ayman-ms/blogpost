import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogPost } from '../models/blog-post';
import { BlogService } from '../services/blog.service';
import { SessionService } from '../services/session.service';
import { Message, MessageService } from 'primeng/api';

@Component({
  selector: 'app-createNewpost',
  templateUrl: './create-blogpost.component.html',
  styleUrls: ['./create-blogpost.component.css']
})
export class CreateBlogpost implements OnInit {
  blogpostToAdd: BlogPost = { id: 0, title: '', body: '', like: 0 };
  userLoggedIn = false;
  msgs!: Message[];
  blogListe?: Array<BlogPost>;
  constructor(private route: ActivatedRoute,
    private messageService: MessageService,
    private router: Router,
    private blogService: BlogService,
    public accountService: SessionService) { }

  ngOnInit(): void { }

  async newPost() {
    let result = await this.blogService.creatPost(this.blogpostToAdd);
    if (result) {
      this.router.navigateByUrl('')
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Blog post created' });
    } else {
      alert("add not success")
    }



  }



}



