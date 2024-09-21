import { Component, ViewChild, viewChild } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EditorialServicioService } from '../app/servicios/editorial-servicio.service.js';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { ModalErrorComponent } from '../app/modal-error/modal-error.component.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editorial-alta',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, ModalErrorComponent],
  templateUrl: './editorial-alta.component.html',
  styleUrl: './editorial-alta.component.css',
  animations: [
    trigger('fadeInOut', [
      state(
        'void',
        style({
          opacity: 0,
        })
      ),
      transition(':leave', [animate(300)]),
    ]),
  ],
})
export class EditorialAltaComponent {
  constructor(
    private editorialServicio: EditorialServicioService,
    private router: Router
  ) {}

  @ViewChild(ModalErrorComponent) modalErrorComponent!: ModalErrorComponent;

  nombre = new FormControl('', [Validators.maxLength(50), Validators.required]);
  showSuccessDiv = false;

  onSubmit() {
    if (this.nombre.valid) {
      this.editorialServicio.postEditorial(this.nombre.value).subscribe({
        next: (response) => {
          this.showSuccessDiv = true;
          setTimeout(() => {
            this.showSuccessDiv = false;
          }, 2000);
          console.log('Funciona');
        },
        error: (err) => {
          if (err.status === 400) {
            this.openModal();
          } else {
            this.router.navigate(['/404']);
          }
        },
      });
    } else {
      this.openModal();
    }
  }
  openModal() {
    if (this.modalErrorComponent) {
      this.modalErrorComponent.open();
    }
  }
}
