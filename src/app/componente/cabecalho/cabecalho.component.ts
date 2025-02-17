import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cabecalho',//nome do componente usado como tag no HTML
  //o atributo standalone informa se o seu componente usa dependências(false) ou não(true)
  //standalone: true
  //imports informa quais dependências o seu componente possui
  imports: [RouterLink],
  templateUrl: './cabecalho.component.html',
  styleUrl: './cabecalho.component.css'
})
export class CabecalhoComponent {

}
