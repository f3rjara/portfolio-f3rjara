export interface PostWP {
  id:             number;
  date:           Date;
  date_gmt:       Date;
  guid:           GUID;
  modified:       Date;
  modified_gmt:   Date;
  slug:           string;
  status:         string;
  type:           string;
  link:           string;
  title:          GUID;
  content:        Content;
  excerpt:        Content;
  author:         number;
  featured_media: number;
  menu_order:     number;
  template:       string;
  meta:           any[];
  acf:            Acf;
  _links:         Links;
}

export interface Links {
  self:            About[];
  collection:      About[];
  about:           About[];
  author:          Author[];
  "wp:attachment": About[];
  curies:          Cury[];
}

export interface About {
  href: string;
}

export interface Author {
  embeddable: boolean;
  href:       string;
}

export interface Cury {
  name:      string;
  href:      string;
  templated: boolean;
}

export interface Acf {
  configuration_post_card: ConfigurationPostCard;
}

export interface ConfigurationPostCard {
  title_custom:     string;
  description_card: string;
  image_post:       string;
}

export interface Content {
  rendered:  string;
  protected: boolean;
}

export interface GUID {
  rendered: string;
}


export interface CardPost {
  id:               number;
  slug:             string;
  date_publish:     string;
  title_card:       string;
  description_card: string;
  featured_card:    string;
  type:             string;
}

export interface RenderPost {
  idPost:      number;
  date_publish:     string;
  description: string;
  imagen_card:      string;
  slugPost:    string;
  title:       string;
  content: string;
  typePost:    string;
  featured_media : number;
  featured_media_url: string;
  idAuthor : number;
  author : string;
}