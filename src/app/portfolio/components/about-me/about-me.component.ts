import { Component, OnInit  } from '@angular/core';
import { Iskills, ISocialMedia } from 'src/app/shared/interfaces/menuInterface';
import { MenuService } from 'src/app/shared/services/menu.service';
import { SkillsService } from 'src/app/shared/services/skills.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  currentSubtitle = 'ACERCA DE MI';
  myMenuSocialMedia!: ISocialMedia[];
  skillsCards!: Iskills[];

  constructor( private menuService: MenuService,  private skillsService: SkillsService) { }

  ngOnInit(): void {
    this.getSocialMedia();
    this.getSkillsCards();
  }

  getSocialMedia():void {
    this.menuService.getMenuSocialMedia().subscribe( menuSocial => this.myMenuSocialMedia = menuSocial ) 
  }
  
  scrollingTop ( event: Event) {
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
  }

  getSkillsCards() {
    this.skillsService.getSkillsCard().subscribe( skills => this.skillsCards = skills );
  }

}
