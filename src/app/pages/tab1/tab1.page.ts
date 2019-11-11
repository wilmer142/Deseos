import { Component } from '@angular/core';
import { DeseosService } from 'src/app/services/deseos.service';
import { Lista } from 'src/app/models/lista.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor( public deseosService: DeseosService,
                private router:Router ) {
  }

  agregarLista(){
    // this.router.navigate(['/tabs', 'tab1', 'agregar']);
    this.router.navigateByUrl('/tabs/tab1/agregar');
  }

}
