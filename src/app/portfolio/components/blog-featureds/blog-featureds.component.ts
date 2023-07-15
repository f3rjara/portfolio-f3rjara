import { Component, OnInit } from '@angular/core';
import { CardPost, PostWP } from 'src/app/blog/interface/single-post-wp';
import { WordpressService } from 'src/app/blog/services/wordpress.service';


@Component({
  selector: 'app-blog-featureds',
  templateUrl: './blog-featureds.component.html',
  styleUrls: ['./blog-featureds.component.scss']
})

export class BlogFeaturedsComponent implements OnInit {

  public currentSubtitle = 'BLOG';
  public blogFeaturedCards: CardPost[] = [];
  public showCards = false;
  private categoyFeatured = 'blog-destacados';

  constructor( private wp_service: WordpressService ) { }

  ngOnInit(): void {
    this.getCategory();
  }

  getCategory() {
    this.wp_service.getCategories( this.categoyFeatured )
      .subscribe({
        next: (resp) => { 
          if( resp.length > 0 ){ 
            this.showPostofCategory( resp[0].id ); 
          }
        },
        error: (e) => { console.error( { 'ok' : false,'response getCategory': e }) }
      })
  }

  showPostofCategory( idCategory: number ) {
    this.wp_service.getPostTypePagination('posts', 1, 2, [ idCategory ] )
      .subscribe({
        next: ( posts: CardPost[] ) => {
          this.blogFeaturedCards = posts;
          setTimeout(() => { this.showCards = true; }, 500);
        },
        error: (e) => { console.error( {'ok' : false,'response showPostofCategory': e }) }
      })
  }
}
