import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-reativo',
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-reativo.component.html',
  styleUrl: './formulario-reativo.component.css'
})
export class FormularioReativoComponent {
  formulario = new FormGroup ({
    nome: new FormControl("", Validators.required),
    telefone: new FormControl("", Validators.required),
    email: new FormControl("", Validators.required),
    descricao: new FormControl("")
  })
}
