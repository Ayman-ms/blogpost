import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BlogPost } from '../models/blog-post';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private httpClient: HttpClient) { }

  public creatPost(blogPost: BlogPost) {
    return this.httpClient.post<BlogPost>('https://localhost:44355/Blog', blogPost).toPromise();
  }

  public updatePost(blogPost: BlogPost) {
    return this.httpClient.put<BlogPost>('https://localhost:44355/Blog', blogPost).toPromise();
  }

  public deletePost(id: number) {
    return this.httpClient.delete<number>('https://localhost:44355/Blog', { params: { id: id } }).toPromise();
  }
  public getPostList() {
    return this.httpClient.get<Array<BlogPost>>('https://localhost:44355/Blog').toPromise();
  }

}