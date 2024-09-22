import { Component } from '@angular/core';
import { Editorial } from '../models/editorial.model.js';
import { EditorialServicioService } from '../servicios/editorial-servicio.service.js';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listado-editorial',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listado-editorial.component.html',
  styleUrl: './listado-editorial.component.css',
})
export class ListadoEditorialComponent {
  editoriales: Editorial[] = [];
  error: string | null = null;
  constructor(private editorialServicio: EditorialServicioService) {}
  ngOnInit() {
    this.editorialServicio.getEditoriales().subscribe({
      next: (editoriales) => {
        this.editoriales = editoriales;
      },
      error: (err) => {
        (this.editoriales = [
          { id: 0, nombre: 'No data' /*cantidadLibros: 0 */ },
        ]),
          (this.error = err.message);
        console.log('Error al cargar las editoriales', err);
        // No está mal, pero deberia incluir más feedback
        // Usar un modal con el mensaje o una bandera para mostrar un div.
      },
    });
  }
}
