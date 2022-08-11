import { Component, HostListener, OnInit } from '@angular/core';

import {
  Router,
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'portfolio';
  public showOverlay = true;
  public autoResize: boolean = true;
  top:any;
  left:any;
  expand=false;
  
  constructor( private router: Router,   ) { }

  ngOnInit() {
    this.router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event)
    })
  }

   // Shows and hides the loading spinner during RouterEvent changes
  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.showOverlay = true;
    }
    if (event instanceof NavigationEnd) {
      this.showOverlay = false;
    }

    // Set loading state to false in both of the below events to hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      this.showOverlay = false;
    }
    if (event instanceof NavigationError) {
      this.showOverlay = false;
    }
  }
  
  
  @HostListener('document:click', ['$event'])
    onClick($event:any) {
      this.expand=true;
      setTimeout(() => {
      this.expand=false;
      }, 500)
    }

  @HostListener('document:mousemove', ['$event'])
    onMousemove($event:any) {
      this.top=($event.pageY - 8)+ "px";
      this.left= ($event.pageX - 8)+ "px";
    }

  @HostListener('document:mouseover', ['$event'])
    onMouseOver($event:any) {
      this.expand=true;
      setTimeout(() => {
      this.expand=false;
      }, 100)
    }
}
