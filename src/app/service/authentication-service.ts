import { inject, Injectable, signal } from '@angular/core';
import { UsuarioService } from '../services/usuario-service';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {

  private usuarioService = inject(UsuarioService);

  loginTrue = signal<boolean>(
    localStorage.getItem('sesion') === 'true'
  );

  //FUNCION PARA INICIO DE SESION
  login(username:string, pass:string):Observable<boolean>{

    return this.usuarioService.getUsuarios().pipe(

      map(usuarios =>{

        const usuarioExiste = usuarios.find(
          u => u.username === username && u.password === pass
        );

        if(usuarioExiste){

          localStorage.setItem('sesion', 'true');

          localStorage.setItem(
            'user',
            JSON.stringify(usuarioExiste)
          );

          this.loginTrue.set(true);

          return true;
        }

        return false;

      })
    );
  }

  logout(){

    localStorage.removeItem('sesion');
    localStorage.removeItem('user');

    this.loginTrue.set(false);
  }
}