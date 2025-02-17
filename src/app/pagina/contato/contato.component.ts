import { Component } from '@angular/core';
import { FormularioComponent } from '../../componente/formulario/formulario.component';
import { FormularioReativoComponent } from '../../componente/formulario-reativo/formulario-reativo.component';

@Component({
  selector: 'app-contato',
  imports: [FormularioComponent, FormularioReativoComponent],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css'
})
export class ContatoComponent {

}
