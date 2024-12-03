import { Component, Input, numberAttribute } from '@angular/core';
import { GeneroCreacionDTO, GeneroDTO } from '../generos';
import { FormularioGeneroComponent } from "../formulario-genero/formulario-genero.component";

@Component({
  selector: 'app-editar-genero',
  standalone: true,
  imports: [FormularioGeneroComponent],
  templateUrl: './editar-genero.component.html',
  styleUrl: './editar-genero.component.css'
})
export class EditarGeneroComponent {
@Input({transform:numberAttribute})
id!:number;

genero:GeneroDTO ={
  id: 1, nombre: "Comedia"
};

guardarCambios(genero:GeneroCreacionDTO){
  //-- guardar cambios

  //this.router.navigate(['/generos']);
  // console.log(this.form.value);
  console.log('editando el género', genero);
}
}
