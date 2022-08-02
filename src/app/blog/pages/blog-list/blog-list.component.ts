import { PostWP } from './../../interface/single-post-wp';
import { WordpressService } from './../../services/wordpress.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})

export class BlogListComponent implements OnInit {

  public results: PostWP[] = [];

  constructor( private wpApi:  WordpressService) { }

  ngOnInit(): void {
    console.log( 
      this.wpApi.getPostTypePagination( 'posts', 1, 9, [34] ).subscribe({
        next: (resp) => {
          console.log( resp )
          this.results =  resp
        },
        error: (e) => console.warn( e )
      })
    )
  }

}
