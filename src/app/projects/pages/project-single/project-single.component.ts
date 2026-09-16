import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-project-single',
    templateUrl: './project-single.component.html',
    styleUrls: ['./project-single.component.scss'],
    standalone: false
})
export class ProjectSingleComponent implements OnInit {

  idProject: string = "";

  constructor( private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    this.idProject =  this.activatedRoute.snapshot.params['id'];
  }
}
