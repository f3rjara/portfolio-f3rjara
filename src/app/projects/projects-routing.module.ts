import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectPageComponent } from './pages/project-page/project-page.component';
import { ProjectSingleComponent } from './pages/project-single/project-single.component';
import { ProjectListComponent  } from './pages/project-list/project-list.component';

const routes: Routes = [
  {
    path:'',
    component: ProjectPageComponent,
    children: [
      {
        path:'',
        component: ProjectListComponent
      },
      {
        path:':id',
        component: ProjectSingleComponent
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
