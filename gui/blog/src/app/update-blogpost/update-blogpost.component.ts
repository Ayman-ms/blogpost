import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogPost } from '../models/blog-post';
import { Router } from '@angular/router';
import { BlogService } from '../services/blog.service';
import { Message, MessageService } from 'primeng/api';


@Component({
  selector: 'app-update',
  templateUrl: './update-blogpost.component.html',
  styleUrls: ['./update-blogpost.component.css'],

})

export class UpdateBlogpostComponent implements OnInit {
  blogpostToEdit: BlogPost = { id: 0, title: '', body: '',like:0 };
  constructor(private route: ActivatedRoute, private router: Router, private httpClient: HttpClient,
    private blogService: BlogService, private messageService: MessageService) { }
  msgs = new Array<Message>();
  ngOnInit(): void {
    this.httpClient.get<Array<BlogPost>>('https://localhost:44355/Blog').subscribe((blogPostList) => {
      this.route.queryParams
        .subscribe(params => {
          console.log(params['id']); // { orderby: "price" }
          console.log(blogPostList)
          for (let i = 0; i < blogPostList.length; i++) {
            if (blogPostList[i].id == params['id']) {
              this.blogpostToEdit = blogPostList[i];
              break;
            }
          }
        }
        );

    });
  }
  // update user
  async updateClick() {

    let result = await this.blogService.updatePost(this.blogpostToEdit);
    if (result) {
      this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Blog post edited' });
      this.router.navigateByUrl('')
    } else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something false!' });

    }
  }


  // delete function
  async deleteClick() {
    let result = await this.blogService.deletePost(this.blogpostToEdit.id);

    if (result) {
      this.messageService.clear();
      this.messageService.add({ severity: 'error', summary: 'Waring', detail: 'Blog post deleted' });
      this.router.navigateByUrl('')
    } else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something false!' });
    }
  }

}