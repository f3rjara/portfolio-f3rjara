import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IMenuPrimary, ISocialMedia } from '../interfaces/menuInterface';
import { CollmenuPriary, CollSocialMedia } from '../interfaces/collection-menu-primary';

@Injectable({
  providedIn: 'root'
})

export class MenuService {

  constructor() { }

  getMenu():Observable<IMenuPrimary[]>{
    return of(CollmenuPriary);
  }

  getItemMenu(url:string):Observable<IMenuPrimary | undefined >{
    console.log("Item solicitado: " + url);
    return of( CollmenuPriary.find( item => item.url === url));
  }

  getMenuSocialMedia():Observable<ISocialMedia[]> {
    return of( CollSocialMedia);
  }

  getItemSocialMedia(name:string):Observable<ISocialMedia | undefined >{
    console.log("Item solicitado: " + name);
    return of( CollSocialMedia.find( item => item.name === name));
  }
}
