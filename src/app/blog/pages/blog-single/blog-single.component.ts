import { AfterContentInit, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import * as moment from 'moment';
import { RenderPost } from '../../interface/single-post-wp';
import { WordpressService } from './../../services/wordpress.service';

@Component({
  selector: 'app-blog-single',
  templateUrl: './blog-single.component.html',
  styleUrls: ['./blog-single.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BlogSingleComponent implements OnInit, AfterContentInit {

  public idPost: string = "";
  public phPost: boolean = true;
  public renderPost!: RenderPost;

  constructor( private activatedRoute: ActivatedRoute, private wp_service : WordpressService ) { }

  ngAfterContentInit(): void {
    this.loadPostBySlug()
  }

  ngOnInit(): void {
    this.idPost =  this.activatedRoute.snapshot.params['id'];
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }, 150);
  }

  async loadPostBySlug() {
    this.wp_service.getPostType('posts', this.idPost )
      .subscribe({
        next: async (resp) => {
          if( resp ) {
            const posts:any =  resp.map( async (post) => {
              let datePost = moment( post.date ).fromNow();
              let imageUrl = '';
              let author = 'Fernando Jaramillo';

              if(  post.featured_media != 0 ) {
                const serviceimage = this.wp_service.getMediaById( post.featured_media  );
                imageUrl = await lastValueFrom ( serviceimage );
              }
              if( post.author > 0 ) {
                const serviceAuthor = this.wp_service.getAuthorById( post.author  );
                author = await lastValueFrom ( serviceAuthor );
              }

              const contentOrigin = post.content.rendered;
              let htmlObject = document.createElement('div');
              htmlObject.innerHTML = contentOrigin;
              htmlObject.querySelectorAll('code').forEach( code => { 
                if( code ) {
                  const contentcode = code.textContent
                  code.textContent = '';
                  code.innerHTML = contentcode?.trim()!;
                }
              })
              return {
                'idPost': post.id,
                'date_publish': datePost,
                'description': post.acf.configuration_post_card.description_card,
                'imagen_card': post.acf.configuration_post_card.image_post,
                'slugPost': post.slug,
                'title': post.title.rendered,
                'content': htmlObject.innerHTML,
                'typePost': post.type,
                'featured_media' : post.featured_media,
                'featured_media_url': imageUrl,
                'idAuthor' : post.author,
                'author' : author,
              }
            })

            this.renderPost = await posts[0];
          }
          setTimeout(() => { this.phPost = false; }, 300);
        },
        error: (e) => console.warn(e)
      })
  }
}
