import { Routes } from '@angular/router';

import { Usuarios } from './features/usuarios/usuarios';
import { Login } from './shared/login/login';
import { Staff } from './features/staff/staff';

import { canactivateguardGuard } from './guards/canactivateguard-guard';

export const routes: Routes = [

  {
    path:"usuarios",
    component:Usuarios
  },

  {
    path:"login",
    component:Login
  },

  {
    path:"staff",
    component:Staff,
    canActivate:[canactivateguardGuard]
  },

  {
    path:"",
    redirectTo:"login",
    pathMatch:"full"
  },

];