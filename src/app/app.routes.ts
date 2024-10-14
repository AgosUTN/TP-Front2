import { RouterModule, Routes } from '@angular/router';
import { PrestamoAltaComponent } from './prestamo-alta/prestamo-alta.component.js';
import { EditorialAltaComponent } from './editorial-alta/editorial-alta.component.js';
import { Error404Component } from './error404/error404.component.js';
import { ListadoEditorialComponent } from './listado-editorial/listado-editorial.component.js';
import { LibroAltaComponent } from './libro-alta/libro-alta.component.js';

export const routes: Routes = [
  { path: 'prestamoAlta', component: PrestamoAltaComponent },
  { path: 'editorial', redirectTo: 'editorial/listado', pathMatch: 'full' },
  { path: 'editorial/actualizar/:id', component: EditorialAltaComponent },
  { path: 'editorial/alta', component: EditorialAltaComponent },
  { path: 'editorial/listado', component: ListadoEditorialComponent },

  { path: 'libro', redirectTo: 'libro/alta', pathMatch: 'full' },
  { path: 'libro/alta', component: LibroAltaComponent },
  { path: '', redirectTo: 'prestamoAlta', pathMatch: 'full' },
  { path: '**', component: Error404Component },
];
export const routing = RouterModule.forRoot(routes);
