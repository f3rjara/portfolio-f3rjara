import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit, ViewEncapsulation  } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MenuService } from 'src/app/shared/services/menu.service';
import { IMenuPrimary, ISocialMedia } from '../../../interfaces/menuInterface';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  standalone: true,
  selector: 'app-navbar-page',
  templateUrl: './navbar-page.component.html',
  styleUrls: ['./navbar-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [ CommonModule, RouterModule, AngularSvgIconModule ],
})

export class NavbarPageComponent implements OnInit {

  scrolled = false;
  showSocial = false;
  toogleMenu = false;

  menuPrimary!: IMenuPrimary[];
  myMenuSocialMedia!: ISocialMedia[];

  constructor( private menuService: MenuService, private router: Router ) {}

  ngOnInit(): void {
    this.getMenuPrimary();
    this.getSocialMedia();
  }

  /**
    * Verifica si el usuario realiza Scroll para mostrar el navbar
    * @param {event} $event
    * @memberof NavbarPageComponent
    * @returns {void}
  * */
  @HostListener("window:scroll", ['$event'])
  navbarScrolling() {
    if( window.outerWidth > 992 ) this.scrolled = window.scrollY > 400;
    if( window.scrollY > 300) this.showSocial = false; this.toogleMenu = false;
  }

  /**
    * Obtiene el menu principal establecido en el servicio
    *
    * @type {void}
    * @memberof NavbarPageComponent
    * @returns {Observable} Observable<IMenuPrimary[]> un arreglo de objetos con la información del menu principal
  */
  getMenuPrimary():void{
    this.menuService.getMenu().subscribe( menuPrimary => this.menuPrimary = menuPrimary )
  }

  /**
   *  Obtiene el menu de redes sociales establecido en el servicio
   * @type {void}
   * @memberof NavbarPageComponent
   * @returns {Observable} Observable<ISocialMedia[]> un arreglo de objetos con la información del menu de redes sociales
  */
  getSocialMedia():void {
    this.menuService.getMenuSocialMedia().subscribe( menuSocial => this.myMenuSocialMedia = menuSocial )
  }


  showSocialMedia() { this.showSocial = !this.showSocial; }

  showMobilemenu () {
    this.showSocial = false;
    this.toogleMenu = !this.toogleMenu;
  }

  gotoSection( target:string, isSubPage: boolean ) {
    setTimeout(() => {
      if( !isSubPage) {
        document.getElementById(target)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest"
        });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 300);
  }

  gotoSectionMobile(target:string, isSubPage: boolean ) {
    this.showMobilemenu();
    this.gotoSection( target, isSubPage);
  }
}
