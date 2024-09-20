import { RouterModule, Routes } from '@angular/router';
import { PrestamoAltaComponent } from './prestamo-alta/prestamo-alta.component.js';
import { EditorialAltaComponent } from './editorial-alta/editorial-alta.component.js';
import { Error404Component } from './error404/error404.component.js';
import { ListadoEditorialComponent } from './listado-editorial/listado-editorial.component.js';

export const routes: Routes = [
  { path: 'prestamoAlta', component: PrestamoAltaComponent },
  { path: 'editorialAlta', component: EditorialAltaComponent },
  { path: 'listadoEditorial', component: ListadoEditorialComponent },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: 'prestamoAlta', pathMatch: 'full' },
];
export const routing = RouterModule.forRoot(routes);
