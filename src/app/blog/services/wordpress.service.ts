import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PostWP } from './../interface/single-post-wp';
import { CategoryWP } from '../interface/category-wp';

@Injectable({
  providedIn: 'root'
})
export class WordpressService {

  private _baseUrl = environment.wp_base_url;
  //http://wordpress.fernando-jaramillo.com/wp-json/wp/v2

  constructor( private http: HttpClient ) {}

  // Retorna todos los post de un Custom PostType: post ->  default
  getAllPostType( post_type: string = 'posts', categories:number[] = [0] ): Observable<PostWP[]> {
    let query = ''
    if( !categories.includes(0) ) { query += `?categories=${categories.join()}`}
    return this.http.get<PostWP[]>(`${this._baseUrl}/${post_type}${query}`);
  }

  // Retorna todos los post de un Custom PostType: post ->  default con Paginacion y Categoria Custom
  getPostTypePagination( post_type: string = 'posts', page: number = 1, per_page: number = 9, categories:number[] = [0] ): Observable<PostWP[]> {
    let query = `page=${page}&per_page=${per_page}`;
    if( !categories.includes(0) ) { query += `&categories=${categories.join()}`}
    return this.http.get<PostWP[]>(`${this._baseUrl}/${post_type}?${query}`);
  }

  // Retorna un post o PostType por Slug
  getPostType( post_type: string = 'posts', slug: string = ''): Observable<PostWP[]> {
    return this.http.get<PostWP[]>(`${this._baseUrl}/${post_type}?slug=${slug}`);
  }

  // Retornar todas las categorias o una por Slug
  getCategories( slug: string = ''):Observable<CategoryWP[]> {
    return this.http.get<CategoryWP[]>(`${this._baseUrl}/categories?slug=${slug}`);
  }
}
