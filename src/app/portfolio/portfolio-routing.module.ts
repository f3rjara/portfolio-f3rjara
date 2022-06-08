import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ProjectsComponent } from './pages/projects/projects.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    children: [
      {
        path:'blog',
        component: BlogComponent
      },
      {
        path:'blog/:id',
        component: BlogComponent
      },
      {
        path:'proyectos',
        component: ProjectsComponent
      },
      {
        path:'proyectos/:id',
        component: ProjectsComponent
      },
      {
        path:'**',
        redirectTo: '404'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild( routes )],
  exports: [RouterModule]
})
export class PortfolioRoutingModule { }