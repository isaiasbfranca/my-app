import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GaragemComponent } from './garagem.component';
import { GaragemDetalheComponent } from './garagem-detalhe/garagem-detalhe.component';
import { GaragemService } from './garagem.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    GaragemComponent,
    GaragemDetalheComponent
  ],
  exports: [
    GaragemComponent
  ],
  providers: [GaragemService]
})
export class GaragemModule { }
