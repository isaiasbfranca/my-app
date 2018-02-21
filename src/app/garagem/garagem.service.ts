import { Injectable } from '@angular/core';

@Injectable()
export class GaragemService {

  

  constructor() { }


  getListaGaragem(){
    return ['Lolapalozza', 'Leo Car', 'Vectra Veiculos'];
  }

}
