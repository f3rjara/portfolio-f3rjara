import { Iskills } from "./menuInterface";


export const CollSkillsCard: Iskills[] = [
  {
    titleCard: 'EDUCACIÓN',
    itemsCard: [
      {
        id: 1,
        nameCurso: 'Licenciado en Informática',
        placeStudy: 'Universidad de Nariño',
        description: 'Carrera profesional',
        modality: 'Pasto - 2018',
        isActive: false
      },
      {
        id: 2,
        nameCurso: 'Diplomado en Desarrollo Fullstack',
        placeStudy: 'Universidad Pontificia Bolivariana',
        description: 'Diplomado',
        modality: 'Medellín - 2020',
        isActive: false
      },
      {
        id: 3,
        nameCurso: 'Programación con énfasis en cloud Computing',
        placeStudy: 'AWS Esucate',
        description: 'Curso con ruta de aprendizaje - MiniTIC',
        modality: 'Online',
        isActive: true
      },
      {
        id: 4,
        nameCurso: 'Angular Avanzado - MEAN',
        placeStudy: 'UDEMY',
        description: 'Curso Online',
        modality: 'Online',
        isActive: true
      },
      {
        id: 5,
        nameCurso: 'Wordpress Experto - Theme Developer',
        placeStudy: 'UDEMY',
        description: 'Curso Online',
        modality: '2020',
        isActive: false
      }
    ]
  },
  {
    titleCard: 'EXPERIENCIA',
    itemsCard: [
      {
        id: 1,
        nameCurso: 'Web Developer',
        placeStudy: 'Sigma Studios S.A.S',
        description: 'Desarrollo de temas personalizados para Wordpress, Pixel Perfect, maquetación según diseños entregados. deployment para diferentes instancias  del proyecto.  Uso de tecnologías como: Shopify, Wordpress, HTML con JS, Prestashop, Webpack, Gitlab',
        modality: 'Medellín - [2020 - 2022]',
        isActive: false
      },
      {
        id: 2,
        nameCurso: 'Frontend Developer',
        placeStudy: 'Freelance',
        description: 'Landings Pages con Angular TS, Webpack, diseño de E-commerces para Wordpress y Shopify,  Creación de plugins para Wordpress. Uso de tecnologías como: Shopify, Wordpress, HTML con JS, Angular TS, Webpack, Gitlab, PHP, Node js.',
        modality: 'Pasto - [2019 - 2022]',
        isActive: false
      },
      {
        id: 3,
        nameCurso: 'Full Stack Developer',
        placeStudy: 'PlayTIC - Soluciones Informáticas',
        description: 'Desarrollo de plugin y temas para wordpress, Woocomerce. Proyectos con Laravel y PHP en el consumo de API para generar informes de datos, aplicaciones web enfocadas a la educación, juegos educativos y webs informativas. Uso de tecnologías como: Wordpress, HTML con JS, Webpack, Github, Laravel, PHP, Node js.',
        modality: 'Pasto - [2018 - 2020]',
        isActive: false
      }
    ]
  }
];