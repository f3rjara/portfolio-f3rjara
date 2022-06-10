import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar-page',
  templateUrl: './navbar-page.component.html',
  styleUrls: ['./navbar-page.component.scss']
})
export class NavbarPageComponent {

  scrolled:Boolean = false;
  showSocial:Boolean = false;
  toogleMenu:Boolean = false;

  constructor() { }
  
  @HostListener("window:scroll", ['$event'])
  navbarScrolling( $event:Event ) {
    if( window.outerWidth > 992 ){
      this.scrolled = window.scrollY > 400;
    }
    if( window.scrollY > 300) this.showSocial = false; this.toogleMenu = false;
  }

  showSocialMedia() {
    this.showSocial = !this.showSocial;
  }
  showMobilemenu() {
    this.showSocial = false;
    this.toogleMenu = !this.toogleMenu;
  }
}
