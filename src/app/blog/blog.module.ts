import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogSingleComponent } from './pages/blog-single/blog-single.component';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { BlogListComponent } from './pages/blog-list/blog-list.component';


@NgModule({
  declarations: [
    BlogSingleComponent,
    BlogPageComponent,
    BlogListComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule
  ],
  exports: [
    BlogPageComponent
  ]
})
export class BlogModule { }
