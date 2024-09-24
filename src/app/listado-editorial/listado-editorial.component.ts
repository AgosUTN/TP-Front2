import { Component } from '@angular/core';
import { Editorial } from '../models/editorial.model.js';
import { EditorialServicioService } from '../servicios/editorial-servicio.service.js';
import { CommonModule } from '@angular/common';
import { PaginationService } from '../servicios/pagination.service.js';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-listado-editorial',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './listado-editorial.component.html',
  styleUrl: './listado-editorial.component.css',
})
export class ListadoEditorialComponent {
  editoriales: Editorial[] = [];
  error: string | null = null;

  paginatedEditoriales: Editorial[] = [];

  // Constantes
  pageSize = 10;
  searchField = 'nombre';

  // Inicializaciones
  currentPage = 1;
  totalPages = 0;

  searchText = new FormControl('');
  constructor(
    private editorialServicio: EditorialServicioService,
    private paginationService: PaginationService
  ) {}

  ngOnInit() {
    this.loadEditoriales();
    this.setupSearchListener();
  }
  setupSearchListener() {
    this.searchText.valueChanges
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe(() => {
        this.currentPage = 1; // Reset a la primera página cuando se realiza una nueva búsqueda
        this.updatePagination();
      });
  }
  loadEditoriales() {
    this.editorialServicio.getEditoriales().subscribe({
      next: (editoriales) => {
        this.editoriales = editoriales;
        this.updatePagination();
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
  updatePagination() {
    const searchValue = this.searchText.value ?? '';
    const filteredEditoriales = this.paginationService.filterItems(
      this.editoriales,
      searchValue,
      this.searchField
    );
    this.totalPages = this.paginationService.getTotalPages(
      filteredEditoriales,
      this.pageSize
    );
    this.paginatedEditoriales = this.paginationService.paginate(
      filteredEditoriales,
      this.pageSize,
      this.currentPage
    );

    this.fillEmptySlots();
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage = this.currentPage + 1;
      this.updatePagination();
    }
  }
  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage = this.currentPage - 1;
      this.updatePagination();
    }
  }
  setPage(page: number) {
    this.currentPage = page;
    this.updatePagination();
  }
  fillEmptySlots() {
    const itemsMissing = this.pageSize - this.paginatedEditoriales.length;
    for (let i = 0; i < itemsMissing; i++) {
      this.paginatedEditoriales.push({
        id: undefined,
        nombre: '',
      });
    }
  }
}

// Manejar el caso de no poder conectar con el servidor.
