import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button-action',
  templateUrl: './button-action.component.html',
  styleUrls: ['./button-action.component.scss']
})
export class ButtonActionComponent implements OnInit {

  @Input() url: string | undefined = undefined;
  @Input() target: string  | undefined = undefined;

  constructor() { }

  ngOnInit(): void {
  }

  onNavigate ( event: Event, url:string | undefined, target:string | undefined){
    if ( url == undefined || target == undefined ){ return; }
    if( target == '' ) target = '_blank';
    window.open(url, target);
  }
}
