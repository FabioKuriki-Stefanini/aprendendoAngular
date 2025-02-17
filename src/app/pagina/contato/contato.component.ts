import { Component } from '@angular/core';
import { FormularioComponent } from '../../componente/formulario/formulario.component';
import { FormularioReativoComponent } from '../../componente/formulario-reativo/formulario-reativo.component';
import clientes from '../../clientes';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contato',
  imports: [FormularioComponent, FormularioReativoComponent, CommonModule],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css'
})
export class ContatoComponent {
  //Criado uma variavel para que possa ser acessado esses dados
  clientes = clientes;
}
