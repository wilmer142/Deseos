import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  listas:Lista [] = [];

  constructor() {
    this.cargarStorage();
  }

  crearLista( titulo:string ): number{
    const lista1 = new Lista(titulo);
    this.listas.push(lista1);
    this.guardarStorage();
    return lista1.id;
  }

  obtenerLista( id: string | number) : Lista{
    id = Number(id);
    return this.listas.find( listaData => listaData.id === id);
  }

  guardarStorage(){
    localStorage.setItem('data', JSON.stringify(this.listas));
  }

  cargarStorage(){
    if(localStorage.getItem('data')){
      this.listas = JSON.parse(localStorage.getItem('data'));
    }
  }

  borrarLista(lista:Lista){
    this.listas = this.listas.filter( listaData => listaData.id != lista.id);
    this.guardarStorage();
  }
}
