import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
 
  constructor() { }

  pegarCursos(){
    return ["Angular", "Java", "Javascript"]
  }
}
