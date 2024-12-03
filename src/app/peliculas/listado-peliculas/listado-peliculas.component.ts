import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ListadoGenericoComponent } from "../../compartidos/componentes/listado-generico/listado-generico.component";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RatingComponent } from "../../compartidos/componentes/rating/rating.component";

@Component({
  selector: 'app-listado-peliculas',
  standalone: true,
  imports: [DatePipe, CurrencyPipe, ListadoGenericoComponent, MatButtonModule, MatIconModule, RatingComponent],
  templateUrl: './listado-peliculas.component.html',
  styleUrl: './listado-peliculas.component.css'
})
export class ListadoPeliculasComponent{

  @Input({required:true})
  peliculas! :any[];


  procesarVoto(voto:number){
    //alert(`Calificación orotgada: ${voto}`);

  }

}
