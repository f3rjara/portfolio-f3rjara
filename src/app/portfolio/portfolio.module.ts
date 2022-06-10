import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HomeComponent } from './pages/home/home.component';

import { PortfolioRoutingModule } from './portfolio-routing.module';

@NgModule({
  declarations: [
    HomeComponent
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
