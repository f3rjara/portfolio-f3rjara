import { Component, OnInit  } from '@angular/core';
import { ISocialMedia } from 'src/app/shared/interfaces/menuInterface';
import { MenuService } from 'src/app/shared/services/menu.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  currentSubtitle:string = 'ACERCA DE MI';
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
