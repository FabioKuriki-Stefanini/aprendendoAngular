import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import clientes from '../../clientes'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule, CommonModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  nome = "";
  telefone = 0;
  email = "";
  descricao = "";

  adicionarCliente(){
    clientes.push({nome: this.nome, telefone: this.telefone, email: this.email, descricao: this.descricao})
    console.log(clientes)
  }
}
