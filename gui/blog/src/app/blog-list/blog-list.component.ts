import { Input, OnChanges, Component, OnInit } from '@angular/core';
import { BlogPost } from '../models/blog-post';
import { BlogService } from '../services/blog.service';
import { SessionService } from '../services/session.service';


@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  userLoggedIn = false;
  count: number = 0;
  comments!: string;
  countt !: number;

  constructor(private blogService: BlogService, public accountService: SessionService) { }

  blogListe?: Array<BlogPost>;

  documentSetHtml(blogpost: BlogPost) {
    setTimeout(() => {
      const element = document.getElementById('blogpostBody' + blogpost.id);
      if (element) {
        element.innerHTML = blogpost.body;
      }
    }, 500)
  }

  async ngOnInit() {
    this.blogListe = await this.blogService.getPostList();
    this.accountService.user.subscribe((u) => {
      if (u && u.userName != 'anonymos') {
        this.userLoggedIn = true;
      }
      else {
        this.userLoggedIn = false;
      }
    });
  }


  // like click button
  async likeClick(post: BlogPost) {
    post.like++;
    await this.blogService.updatePost(post);
    this.blogListe = await this.blogService.getPostList();
  }

  // dislike click button
  async dislikeClick(post: BlogPost) {
    post.like--;
    await this.blogService.updatePost(post);
    this.blogListe = await this.blogService.getPostList();
  }

  // receiveComment($event: string) {
  //   this.comments = $event;
  //   this.countt = this.comments.length;
  //   console.log(this.comments.length);
  // }
  // recieveCount($event: string) {
  //   this.comments = $event;
  //   this.countt = this.comments.length;
  // }

}
