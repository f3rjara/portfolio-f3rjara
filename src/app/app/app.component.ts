import { Component } from '@angular/core';
import { Router} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {
  title: string;
  constructor( private router: Router ) { this.title = 'Fernando Jaramillo | Portafolio' }
}
