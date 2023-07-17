import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button-action',
  templateUrl: './button-action.component.html',
  styleUrls: ['./button-action.component.scss']
})
export class ButtonActionComponent {

  @Input() url: string | undefined = undefined;
  @Input() target: string  | undefined = undefined;
  @Input() label  = 'DESCARGAR CURRÍCULO';

  constructor( private router: Router) { }

  onNavigate ( event: Event, url:string | undefined, target:string | undefined){
    if ( url == undefined || target == undefined ){ return; }
    if( target == '' ) target = '_blank';
    if( url.includes('http://') || url.includes('https://') ) { window.open(url, target); }
    else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setTimeout(() => { this.router.navigate([url]); }, 150);
    }

  }
}
