import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HomeComponent } from './pages/home/home.component';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { HeroPageComponent } from './components/hero-page/hero-page.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeroPageComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
  ],
  exports: [
    HomeComponent
  ],
})
export class PortfolioModule { }
