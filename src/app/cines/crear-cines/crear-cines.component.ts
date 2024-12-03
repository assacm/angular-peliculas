import { Component } from '@angular/core';
import { CineCreacionDTO } from '../cines';
import { FormularioCinesComponent } from "../formulario-cines/formulario-cines.component";

@Component({
  selector: 'app-crear-cines',
  standalone: true,
  imports: [FormularioCinesComponent],
  templateUrl: './crear-cines.component.html',
  styleUrl: './crear-cines.component.css'
})
export class CrearCinesComponent {

  guardarCambios(cine:CineCreacionDTO){

    console.log('creando cine', cine);

  }

}
