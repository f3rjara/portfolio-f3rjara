import { AfterContentInit, Component } from '@angular/core';
import { Router} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements AfterContentInit {
  title: string;
  constructor( private router: Router ) { this.title = 'Fernando Jaramillo | Portafolio' }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
    document.querySelector('body')?.classList.toggle('loaded');
  }
}
