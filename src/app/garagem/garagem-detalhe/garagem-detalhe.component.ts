import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-garagem-detalhe',
  templateUrl: './garagem-detalhe.component.html',
  styleUrls: ['./garagem-detalhe.component.css']
})
export class GaragemDetalheComponent implements OnInit {

  valorAtual: string = '';
  valorsalvo: '';

  isMouseOver: boolean = false;


  botaoClick(){
    alert('Botão clicado!');
  }
  
  salvarValor(valor){
    this.valorsalvo = valor;

  }

  onKeyUp(evento: KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  constructor() {
  
   }

  ngOnInit() {
  }

}
