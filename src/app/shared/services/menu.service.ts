import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IMenuPrimary, ISocialMedia } from '../interfaces/menuInterface';
import { CollectionMenuPriary, CollSocialMedia } from '../interfaces/collection-menu-primary';

@Injectable({
  providedIn: 'root'
})

export class MenuService {

  getMenu():Observable<IMenuPrimary[]>{
    return of(CollectionMenuPriary);
  }

  getItemMenu(url:string):Observable<IMenuPrimary | undefined >{
    return of( CollectionMenuPriary.find( itemMenu => itemMenu.url === url));
  }

  getMenuSocialMedia():Observable<ISocialMedia[]> {
    return of( CollSocialMedia);
  }

  getItemSocialMedia(name:string):Observable<ISocialMedia | undefined >{
    return of( CollSocialMedia.find( item => item.name === name));
  }
}
