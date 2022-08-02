import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-single',
  templateUrl: './blog-single.component.html',
  styleUrls: ['./blog-single.component.scss']
})
export class BlogSingleComponent implements OnInit {

  idPost: string = "";

  constructor( private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    this.idPost =  this.activatedRoute.snapshot.params['id'];
    console.log( this.idPost )
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }, 150);
  }

}
