import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute, NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {filter, map} from 'rxjs';

import {LoaderComponent} from "./shared/components/ui/loader/loader.component";
import {BackToTopComponent} from "./shared/components/ui/back-to-top/back-to-top.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,LoaderComponent,BackToTopComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {

    constructor(
    private router: Router, 
    private titleService: Title, 
    private activatedRoute: ActivatedRoute) {
    }

  ngOnInit() {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => {
          let route = this.activatedRoute.firstChild;
          while (route?.firstChild) {
            route = route.firstChild;
          }
          const pageTitle = route?.snapshot.data['pageTitle'] || route?.snapshot.data['title'];
            return pageTitle ? `${pageTitle} | HMS` : 'HMS';
        })
      )
      .subscribe(title => {
        this.titleService.setTitle(title);
      });
  }
}
