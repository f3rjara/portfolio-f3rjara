import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-subtitle-section',
    templateUrl: './subtitle-section.component.html',
    styleUrls: ['./subtitle-section.component.scss'],
    standalone: false
})
export class SubtitleSectionComponent implements OnInit {

  @Input() subtitle:string = 'SECTION';
  constructor() { }

  ngOnInit(): void {
  }

}
