import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  imports: [CommonModule],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css'
})
export class CursosComponent {
  cursosServices: CursosService = new CursosService()
  cursos: string[] = this.cursosServices.pegarCursos()
}
