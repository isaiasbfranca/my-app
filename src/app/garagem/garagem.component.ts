import { Component, OnInit } from '@angular/core';
import { GaragemService } from './garagem.service';

@Component({
  selector: 'app-garagem',
  templateUrl: './garagem.component.html',
  styleUrls: ['./garagem.component.css']
})
export class GaragemComponent implements OnInit {

  nomeGaragem: string;

  listaGaragem: string[];



  constructor(private garagensService: GaragemService ) { 
    this.nomeGaragem = 'Primeira garagem';

    
    this.listaGaragem = this.garagensService.getListaGaragem();
  }


  ngOnInit() {
  }

}
