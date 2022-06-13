import { Component, OnInit } from '@angular/core';
import { ISocialMedia } from '../interfaces/menuInterface';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-footer-page',
  templateUrl: './footer-page.component.html',
  styleUrls: ['./footer-page.component.scss']
})
export class FooterPageComponent implements OnInit  {

  myMenuSocialMedia!: ISocialMedia[];
  
  constructor( private menuService: MenuService ) { }

  ngOnInit(): void {
    this.getSocialMedia();
  }

  getSocialMedia():void {
    this.menuService.getMenuSocialMedia().subscribe( menuSocial => this.myMenuSocialMedia = menuSocial ) 
  }
  
  scrollingTop ( event: Event) {
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
  }
}
