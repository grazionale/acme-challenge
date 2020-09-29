import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ToastyConfig } from 'ng2-toasty';

@Component({
  selector: 'body',
  template: '<router-outlet></router-outlet><ng2-toasty></ng2-toasty>',
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private toastyConfig: ToastyConfig) {
    this.toastyConfig.theme = 'bootstrap';
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
}
