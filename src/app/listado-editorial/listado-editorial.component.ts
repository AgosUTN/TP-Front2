import { Component } from '@angular/core';
import { Editorial } from '../models/editorial.model.js';
import { EditorialServicioService } from '../servicios/editorial-servicio.service.js';
import { CommonModule } from '@angular/common';
import { PaginationService } from '../servicios/pagination.service.js';

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
  pageSize = 10; // Constante
  paginatedEditoriales: Editorial[] = [];

  // Inicializaciones
  currentPage = 1;
  totalPages = 0;

  constructor(
    private editorialServicio: EditorialServicioService,
    private paginationService: PaginationService
  ) {}

  ngOnInit() {
    this.loadEditoriales();
    this.paginateEditoriales();
  }
  loadEditoriales() {
    this.editorialServicio.getEditoriales().subscribe({
      next: (editoriales) => {
        this.editoriales = editoriales;
        this.totalPages = Math.ceil(editoriales.length / this.pageSize); // Redondea al entero mayor
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
  paginateEditoriales() {
    this.paginatedEditoriales = this.paginationService.paginate(
      this.editoriales,
      this.pageSize,
      this.currentPage
    );
    const itemsMissing = this.pageSize - this.paginatedEditoriales.length;
    if (itemsMissing > 0) {
      for (let i = 0; i < itemsMissing; i++) {
        this.paginatedEditoriales.push({
          id: undefined,
          nombre: '',
          //cantidadLibros: 0,
        });
      }
    }
  }
  // Necesario dos funciones y no un bindeo solo de disabled para evitar manipulación malintencionada

  nextPage() {
    if (this.currentPage != this.totalPages) {
      this.currentPage = this.currentPage + 1;
      this.paginateEditoriales();
    }
  }
  previousPage() {
    if (this.currentPage != 1) {
      this.currentPage = this.currentPage - 1;
      this.paginateEditoriales();
    }
  }
  setPage(page: number) {
    this.currentPage = page;
    this.paginateEditoriales();
  }
}
