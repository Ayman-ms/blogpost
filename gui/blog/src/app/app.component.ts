import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Message } from 'primeng//api';
import { SessionService } from './services/session.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'blog';

  constructor(private router: Router) {


  }

  ngOnInit() {
    // let element: HTMLElement | null = null;

    // this.router.events.pipe(
    //   filter((e): e is NavigationEnd => e instanceof NavigationEnd)).subscribe((endEvent) => {
    //     if (endEvent.url === '/about') {
    //       document.getElementById("appcontainer")?.classList.add('test');
    //       document.getElementById("appcontainer")?.classList.remove('test2');
    //     }
    //     else {
    //       document.getElementById("appcontainer")?.classList.add('test2');
    //       document.getElementById("appcontainer")?.classList.remove('test');
    //     }
    //   })
  }
}
