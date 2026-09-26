import { Component, inject } from '@angular/core';
import { UsuarioService } from '../../services/usuario-service';
import { Usuario } from '../../models/usuario';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class Formulario {

  private usuarioService = inject(UsuarioService);

  nuevoUsuario: Usuario = {
    username:'',
    password:''
  }

  //Metodo registrar usuario
  registrarUsuario(){

    this.usuarioService
      .postUsuario(this.nuevoUsuario)
      .subscribe(() => {

        alert('Usuario registrado correctamente');

        this.limpiarFormulario();

      });
  }

  limpiarFormulario(){

    this.nuevoUsuario = {
      username:'',
      password:''
    }

  }
}