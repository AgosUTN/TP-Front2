import { RouterModule, Routes } from '@angular/router';
import { PrestamoAltaComponent } from './prestamo-alta/prestamo-alta.component.js';
import { EditorialAltaComponent } from './editorial-alta/editorial-alta.component.js';

export const routes: Routes = [
  { path: 'prestamoAlta', component: PrestamoAltaComponent },
  { path: 'editorialAlta', component: EditorialAltaComponent },
  { path: '', redirectTo: 'prestamoAlta', pathMatch: 'full' },
];
export const routing = RouterModule.forRoot(routes);
