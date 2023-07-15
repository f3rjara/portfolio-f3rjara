import { IitemSkill } from './../../../shared/interfaces/menuInterface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-skills',
  templateUrl: './card-skills.component.html',
  styleUrls: ['./card-skills.component.scss']
})

export class CardSkillsComponent implements OnInit {

  @Input() titleCard = '';
  @Input() dataSkills!:IitemSkill[];

  constructor() { }

  ngOnInit(): void {
  }

}
