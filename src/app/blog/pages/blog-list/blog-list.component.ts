import { CardPost, PostWP } from './../../interface/single-post-wp';
import { WordpressService } from './../../services/wordpress.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})

export class BlogListComponent implements OnInit {

  public currentSubtitle:string = 'POSTS RECIENTES';
  public blogFeaturedCards: CardPost[] = [];
  public showCards:boolean = false;
  public paged:number = 1;
  public per_page:number = 6;
  public show_categories:number[] = [1];

  constructor( private wpApi:  WordpressService) { }

  ngOnInit(): void {
    this.getPostTypePagination();
  }

  getPostTypePagination () {
    this.wpApi.getPostTypePagination( 'posts', this.paged, this.per_page, this.show_categories )
      .subscribe({
        next: ( posts: CardPost[] ) => {
          this.blogFeaturedCards = posts;
          this.showCards = true;
        },
        error: (e) => console.warn( e )
      })
  }
}
