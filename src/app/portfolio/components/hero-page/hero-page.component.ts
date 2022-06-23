import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styleUrls: ['./hero-page.component.scss']
})
export class HeroPageComponent implements OnInit {

  titleShow: string = "";

  constructor() {
    this.titleShow = "PORTAFOLIO"
  }

  ngOnInit(): void {
  }

}
