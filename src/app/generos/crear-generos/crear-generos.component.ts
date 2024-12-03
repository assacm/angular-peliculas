import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormularioGeneroComponent } from "../formulario-genero/formulario-genero.component";
import { GeneroCreacionDTO } from '../generos';

@Component({
  selector: 'app-crear-generos',
  standalone: true,
  imports: [RouterLink, FormularioGeneroComponent],
  templateUrl: './crear-generos.component.html',
  styleUrl: './crear-generos.component.css'
})
export class CrearGenerosComponent {

  private router = inject(Router);



  guardarCambios(genero:GeneroCreacionDTO){
    //-- guardar cambios

    //this.router.navigate(['/generos']);
    // console.log(this.form.value);
    console.log('creando el género', genero);
  }
}
