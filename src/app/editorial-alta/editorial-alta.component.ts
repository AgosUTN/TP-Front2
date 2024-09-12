import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EditorialServicioService } from '../servicios/editorial-servicio.service.js';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-editorial-alta',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
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
  constructor(private editorialServicio: EditorialServicioService) {}

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
          } else {
            console.log('Redirigiendo a 404...');
          }
        },
      });
    } else {
      console.log(
        'Por favor, complete correctamente todos los campos requeridos.'
      );
    }
    console.log('Formulario enviado');
  }
}
