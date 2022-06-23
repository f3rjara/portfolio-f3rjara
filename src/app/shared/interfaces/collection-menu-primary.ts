import { IMenuPrimary, ISocialMedia } from './menuInterface';

export const CollmenuPriary: IMenuPrimary[] = [
  {
    name: 'ACERCA DE MI',
    url: 'about-me',
    routerlink: '/',
    isSubPage: false,
    isItemLogo: false,
  },
  {
    name: 'FJ',
    url: '/',
    routerlink: '/',
    isSubPage: true,
    isItemLogo: true,
  },
  {
    name: 'CONTACTO',
    url: 'contacto',
    routerlink: '/',
    isSubPage: false,
    isItemLogo: false,
  },
];


export const CollSocialMedia: ISocialMedia[] = [
  {
    id: 1,
    name: 'linkdein',
    title: 'Visita mi Linkedin',
    url: 'https://co.linkedin.com/in/f3rjara',
    icon: 'bx bxl-linkedin-square'
  },
  {
    id: 2,
    name: 'github',
    title: 'Visita mi Github',
    url: 'https://github.com/f3rjara',
    icon: 'bx bxl-github'
  },
  {
    id: 3,
    name: 'whatsapp',
    title: 'Envía un mensaje por WhatsApp',
    url: 'https://cutt.ly/AJVbAYD',
    icon: 'bx bxl-whatsapp'
  }
];

/* 
  {
    name: 'PROYECTOS',
    url: 'proyectos',
    routerlink: '/proyectos',
    isSubPage: true,
    isItemLogo: false,
  },
  {
    name: 'BLOG',
    url: 'blog',
    routerlink: '/blog',
    isSubPage: true,
    isItemLogo: false,
  },
*/