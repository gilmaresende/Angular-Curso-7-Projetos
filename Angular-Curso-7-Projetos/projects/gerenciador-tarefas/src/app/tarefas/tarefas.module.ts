import { RouterModule } from '@angular/router';
import { TarefaService, TarefaConcluidaDirective } from './shared';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarTarefaComponent } from './listar';
import { FormsModule } from '@angular/forms';
import { CadastroTarefaComponent } from './cadastro';
import { EditarTarefaComponent } from './editar';

@NgModule({
  declarations: [
    ListarTarefaComponent,
    CadastroTarefaComponent,
    EditarTarefaComponent,
    TarefaConcluidaDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [TarefaService]
})
export class TarefasModule { }
