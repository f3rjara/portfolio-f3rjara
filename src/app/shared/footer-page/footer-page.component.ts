import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-page',
  templateUrl: './footer-page.component.html',
  styleUrls: ['./footer-page.component.scss']
})
export class FooterPageComponent  {

  constructor() { }

  scrollingTop ( event: Event) {
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
  }
}
