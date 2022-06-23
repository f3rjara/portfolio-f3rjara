import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { BlogListComponent } from './pages/blog-list/blog-list.component';
import { BlogSingleComponent } from './pages/blog-single/blog-single.component';

const routes: Routes = [
  {
    path:'',
    component: BlogPageComponent,
    children: [
      {
        path:'',
        component: BlogListComponent
      },
      {
        path:':id',
        component: BlogSingleComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
