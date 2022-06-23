import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectPageComponent } from './pages/project-page/project-page.component';
import { ProjectSingleComponent } from './pages/project-single/project-single.component';
import { ProjectListComponent } from './pages/project-list/project-list.component';


@NgModule({
  declarations: [
    ProjectPageComponent,
    ProjectSingleComponent,
    ProjectListComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule
  ],
  exports: [
    ProjectPageComponent,
    ProjectSingleComponent
  ]
})
export class ProjectsModule { }
