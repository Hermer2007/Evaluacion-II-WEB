export interface Personaje {

  id: number;
  name: string;
  gender: string;
  image: string;

}

export interface ResultadosApi {

  items: Personaje[];

}