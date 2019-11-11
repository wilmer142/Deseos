import { ListaItem } from './lista-item.model';


export class Lista {

    id: number;
    titulo: string;
    creadaEn: Date;
    TerminadaEn: Date;
    Completada: boolean;
    items: ListaItem[];

    constructor( titulo:string) {
        this.titulo = titulo;
        this.creadaEn = new Date();
        this.Completada = false;
        this.items = [];
        this.id = new Date().getTime();
    }
}