import { AfterContentInit, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { RenderPost } from '../../interface/single-post-wp';
import { WordpressService } from './../../services/wordpress.service';

@Component({
  selector: 'app-blog-single',
  templateUrl: './blog-single.component.html',
  styleUrls: ['./blog-single.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BlogSingleComponent implements OnInit, AfterContentInit, OnDestroy {

  public idPost = "";
  public phPost = true;
  public renderPost!: RenderPost ;
  public suscriptionLoadPost!: Subscription;
  
  constructor( private activatedRoute: ActivatedRoute, private wp_service : WordpressService ) { }

  ngOnInit(): void {
    this.idPost =  this.activatedRoute.snapshot.params['id'];
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }, 150);
  }

  ngAfterContentInit(): void {
    this.loadPostBySlug()
  }

  ngOnDestroy(): void {
    this.suscriptionLoadPost.unsubscribe();
  }

  async loadPostBySlug() {
    this.suscriptionLoadPost = this.wp_service.getPostType('posts', this.idPost )
      .subscribe({
        next: async (resp) => {
          await Promise.all( resp ).then( ( postRender ) => {
            this.renderPost = postRender[0];
            this.phPost = false;
          }).catch( (e) => { console.error( {'ok' : false,'response': e }) } );
        },
        error: (e) => { console.error( {'ok' : false,'response': e }) }
      })
  }
}
