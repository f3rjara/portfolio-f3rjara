import { CardPost } from './../../interface/single-post-wp';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-single-card-post',
  templateUrl: './single-card-post.component.html',
  styleUrls: ['./single-card-post.component.scss']
})
export class SingleCardPostComponent {

  @Input() cardPost!:CardPost;

  constructor() {  }
}
