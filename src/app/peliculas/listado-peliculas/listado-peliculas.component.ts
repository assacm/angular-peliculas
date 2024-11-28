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

  AgregarPelicula(){
    this.peliculas.push({
      titulo:'Inception',
      fechaLanzamiento: new Date('2012-07-03'),
      precio:560
    })

  }

  remover(pelicula:any){
    const indice = this.peliculas.findIndex((peliculaActual:any)=> peliculaActual.titulo == pelicula.titulo);
    this.peliculas.splice(indice,1);

  }

  procesarVoto(voto:number){
    alert(`Calificación orotgada: ${voto}`);

  }

}
