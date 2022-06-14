import { CollSkillsCard } from './../interfaces/collection-skills-card';
import { IitemSkill, Iskills } from './../interfaces/menuInterface';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class SkillsService {

  constructor() { }

  
  getSkillsCard():Observable<Iskills[]>{
    return of(CollSkillsCard);
  }

  getSkill(id:string):any{
    console.log("Item solicitado: " + id);
    return id;
  }
}
