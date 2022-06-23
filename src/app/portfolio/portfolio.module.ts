import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HomeComponent } from './pages/home/home.component';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { HeroPageComponent } from './components/hero-page/hero-page.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { SubtitleSectionComponent } from './components/subtitle-section/subtitle-section.component';
import { CardSkillsComponent } from './components/card-skills/card-skills.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    HeroPageComponent,
    AboutMeComponent,
    SubtitleSectionComponent,
    CardSkillsComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    SharedModule
  ],
  exports: [
    HomeComponent
  ],
})
export class PortfolioModule { }
