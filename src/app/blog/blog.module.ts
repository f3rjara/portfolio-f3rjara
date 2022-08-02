import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogSingleComponent } from './pages/blog-single/blog-single.component';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { BlogListComponent } from './pages/blog-list/blog-list.component';
import { SingleCardPostComponent } from './components/single-card-post/single-card-post.component';
import { PlaceholderSingleCardPostComponent } from './components/placeholder-single-card-post/placeholder-single-card-post.component';


@NgModule({
  declarations: [
    BlogSingleComponent,
    BlogPageComponent,
    BlogListComponent,
    SingleCardPostComponent,
    PlaceholderSingleCardPostComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    HttpClientModule
  ],
  exports: [
    BlogPageComponent,
    SingleCardPostComponent,
    PlaceholderSingleCardPostComponent
  ]
})
export class BlogModule { }
