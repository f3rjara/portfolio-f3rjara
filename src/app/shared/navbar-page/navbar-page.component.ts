import { Component, HostListener, OnInit, ViewEncapsulation  } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/shared/services/menu.service';
import { IMenuPrimary, ISocialMedia } from '../interfaces/menuInterface';

@Component({
  selector: 'app-navbar-page',
  templateUrl: './navbar-page.component.html',
  styleUrls: ['./navbar-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class NavbarPageComponent implements OnInit {

  scrolled:Boolean = false;
  showSocial:Boolean = false;
  toogleMenu:Boolean = false;

  myMenu!: IMenuPrimary[];
  myMenuSocialMedia!: ISocialMedia[];

  constructor( private menuService: MenuService, private router: Router ) {}

  getMenuPrimary():void{
    this.menuService.getMenu().subscribe( menuPrimary => this.myMenu = menuPrimary )
  }
  getSocialMedia():void {
    this.menuService.getMenuSocialMedia().subscribe( menuSocial => this.myMenuSocialMedia = menuSocial ) 
  }

  ngOnInit(): void {
    this.getMenuPrimary();
    this.getSocialMedia();
  }

  
  @HostListener("window:scroll", ['$event'])
  navbarScrolling( $event:Event ) {
    if( window.outerWidth > 992 ) this.scrolled = window.scrollY > 400;
    if( window.scrollY > 300) this.showSocial = false; this.toogleMenu = false;
  }

  showSocialMedia() { this.showSocial = !this.showSocial; }
  showMobilemenu () {
    this.showSocial = false;
    this.toogleMenu = !this.toogleMenu;
  }

  gotoSection( target:string, isSubPage: boolean, itemRouter?: string ) {
    if( !isSubPage) {
      setTimeout(() => {
        document.getElementById(target)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest"
        });
      }, 300);
    }
    else { setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 300);  }
  }

  gotoSectionMobile(target:string, isSubPage: boolean ) {
    this.showMobilemenu();
    this.gotoSection( target, isSubPage);
  }
}
