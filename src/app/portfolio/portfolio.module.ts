import { BlogModule } from './../blog/blog.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './pages/home/home.component';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { HeroPageComponent } from './components/hero-page/hero-page.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { CardSkillsComponent } from './components/card-skills/card-skills.component';

import { SharedModule } from '../shared/shared.module';
import { BlogFeaturedsComponent } from './components/blog-featureds/blog-featureds.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeroPageComponent,
    AboutMeComponent,
    CardSkillsComponent,
    BlogFeaturedsComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    SharedModule,
    BlogModule,
  ],
  exports: [
    HomeComponent
  ],
})
export class PortfolioModule { }
