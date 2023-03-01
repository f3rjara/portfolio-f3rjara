import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom, map, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CardPost, PostWP, RenderPost } from './../interface/single-post-wp';
import { CategoryWP } from '../interface/category-wp';
import * as moment from 'moment';


@Injectable({
  providedIn: 'root'
})
export class WordpressService {

  private _baseUrl = environment.wp_base_url;
  //http://wordpress.fernando-jaramillo.com/wp-json/wp/v2

  constructor( private http: HttpClient ) {
    moment.locale('es-us');
  }

  // Retorna todos los post de un Custom PostType: post ->  default
  getAllPostType( post_type: string = 'posts', categories:number[] = [0] ): Observable<PostWP[]> {
    let query = ''
    if( !categories.includes(0) ) { query += `?categories=${categories.join()}`}
    return this.http.get<PostWP[]>(`${this._baseUrl}/${post_type}${query}`);
  }

  // Retorna todos los post de un Custom PostType CARD: post ->  default con Paginacion y Categoria Custom
  getPostTypePagination( 
    post_type: string = 'posts', 
    page: number = 1, 
    per_page: number = 9,
    categories:number[] = [0] ): Observable<CardPost[]> {
      let query = `page=${page}&per_page=${per_page}`;
      if( !categories.includes(0) ) { query += `&categories=${categories.join()}`}
      return this.http.get<CardPost[]>(`${this._baseUrl}/${post_type}?${query}`)
      .pipe(
        map( ( posts: CardPost[] ) => {
          return posts.map( ( post: any ) => {
            return {
              id:               post.id,
              slug:             post.slug,
              date_publish:     moment( post.date ).fromNow(),
              title_card:       post.acf && post.acf.configuration_post_card.title_custom ? post.acf.configuration_post_card.title_custom :  post.title.rendered,
              description_card: post.acf && post.acf.configuration_post_card.description_card ? post.acf.configuration_post_card.description_card : post.excerpt.rendered,
              featured_card:    post.acf && post.acf.configuration_post_card.image_post ? post.acf.configuration_post_card.image_post : null,
              type:             post.type
            }
          })
        })
      )
  }

  // Retorna un post o PostType por Slug
  getPostType( post_type: string = 'posts', slug: string = ''): Observable<RenderPost[]> {
    return this.http.get<RenderPost[]>(`${this._baseUrl}/${post_type}?slug=${slug}`)
    .pipe(
      map( ( resp:RenderPost[] )  => {
        const posts:any =  resp.map( async ( post:any ) => {
          const datePost = moment( post.date ).fromNow();
          let imageUrl = '';
          let author = 'Fernando Jaramillo';

          if(  post.featured_media != 0 ) {
            const serviceimage = this.getMediaById( post.featured_media  );
            imageUrl = await lastValueFrom ( serviceimage );
          }

          if( post.author > 0 ) {
            const serviceAuthor = this.getAuthorById( post.author  );
            author = await lastValueFrom ( serviceAuthor );
          }

          const contentOrigin = post.content.rendered;
          const htmlObject = document.createElement('div');
          htmlObject.innerHTML = contentOrigin;
          htmlObject.querySelectorAll('code').forEach( code => { 
            if( code ) {
              const contentcode = code.textContent
              code.textContent = '';
              code.innerHTML = contentcode?.trim()!;
            }
          })

          return {
            'idPost': post.id,
            'date_publish': datePost,
            'description': post.acf.configuration_post_card.description_card,
            'imagen_card': post.acf.configuration_post_card.image_post,
            'slugPost': post.slug,
            'title': post.title.rendered,
            'content': htmlObject.innerHTML,
            'typePost': post.type,
            'featured_media' : post.featured_media,
            'featured_media_url': imageUrl,
            'idAuthor' : post.author,
            'author' : author,
          }
        })
        return posts;
      })
    )
  }

  // Retornar todas las categorias o una por Slug
  getCategories( slug: string = ''):Observable<CategoryWP[]> {
    if ( slug === '' ) {
      return this.http.get<CategoryWP[]>(`${this._baseUrl}/categories`);
    }
    return this.http.get<CategoryWP[]>(`${this._baseUrl}/categories?slug=${slug}`);
  }

  // Retorna un media featured by ID 
  getMediaById( id: number ): Observable<any> {
    return this.http.get<any>(`${this._baseUrl}/media/${id}`)
    .pipe(
      map( (resp) => {
        const { source_url } = resp;
        return source_url;
      })
    );
  }

  // Retorna un media featured by ID 
  getAuthorById( id: number ): Observable<any> {
    return this.http.get<any>(`${this._baseUrl}/users/${id}`)
    .pipe(
      map( (resp) => {
        const { name } = resp;
        return name;
      })
    );
  }
  
}
