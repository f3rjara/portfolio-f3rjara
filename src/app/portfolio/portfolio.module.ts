import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ProjectsComponent } from './pages/projects/projects.component';

import { PortfolioRoutingModule } from './portfolio-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    BlogComponent,
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule
  ],
  exports: [
    HomeComponent,
    BlogComponent,
    ProjectsComponent
  ],
})
export class PortfolioModule { }
