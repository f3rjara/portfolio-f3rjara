import { Component, OnInit } from '@angular/core';
import { CardPost, PostWP } from 'src/app/blog/interface/single-post-wp';
import { WordpressService } from 'src/app/blog/services/wordpress.service';

import * as moment from 'moment';
import 'moment/locale/es-us';

@Component({
  selector: 'app-blog-featureds',
  templateUrl: './blog-featureds.component.html',
  styleUrls: ['./blog-featureds.component.scss']
})
export class BlogFeaturedsComponent implements OnInit {

  public currentSubtitle:string = 'BLOG';
  public blogFeaturedCards: CardPost[] = [];
  public showCards:boolean = false;
  private categoyFeatured: string = 'blog-destacados';

  constructor( private wp_service: WordpressService ) { }

  ngOnInit(): void {
    this.getCategory();
  }

  getCategory() {
    this.wp_service.getCategories( this.categoyFeatured)
      .subscribe({
        next: (resp) => { if( resp.length > 0 ){ this.showPostofCategory( resp[0].id ); }},
        error: (e) => { console.error( {'ok' : false,'response': e }) }
      })
  }

  showPostofCategory( idCategory: number ) {
    this.wp_service.getPostTypePagination('posts', 1, 2, [ idCategory ] )
      .subscribe({
        next: ( resp:PostWP[] ) => {
          if( resp.length > 0 ){
            const posts:CardPost[] = resp.map( post => {
              let datePost = moment( post.date ).fromNow();
              return {
                'idPost_card': post.id,
                'typePost_card': post.type,
                'slugPost_card': post.slug,
                'imagen_card': post.acf.configuration_post_card.image_post,
                'title_card': post.title.rendered,
                'description_card': post.acf.configuration_post_card.description_card,
                'date_publish': datePost
              }
            })
            this.blogFeaturedCards = posts;
          }
          setTimeout(() => {
            this.showCards = true;
          }, 1500);
        },
        error: (e) => { console.error( {'ok' : false,'response': e }) }
      })
  }
}
