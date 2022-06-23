export interface IMenuPrimary {
  name: string;
  url: string;
  isSubPage: boolean;
  isItemLogo: boolean;
  routerlink: string;
}

export interface ISocialMedia {
  id?: number
  name: string;
  title: string;
  url: string;
  icon: string;
}

export interface IitemSkill {
  id: number;
  nameCurso: string;
  placeStudy: string;
  description: string;
  dateEnd?: string;
  modality: string;
  isActive: boolean;
  urlCertificate?: string;
}

export interface Iskills {
  titleCard: string;
  itemsCard: IitemSkill[];
}