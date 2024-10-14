import {
  Component,
  Input,
  TemplateRef,
  ViewChild,
  viewChild,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

import {
  isbnValidator,
  notUndefinedValidator,
  positiveIntegerValidator,
} from '../../validations/validations.js';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { ListadoEditorialLiteComponent } from '../listado-editorial-lite/listado-editorial-lite.component';
@Component({
  selector: 'app-libro-alta',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, ListadoEditorialLiteComponent],
  templateUrl: './libro-alta.component.html',
  styleUrl: './libro-alta.component.css',
})
export class LibroAltaComponent {
  libroForm!: FormGroup;
  @ViewChild('content') content!: TemplateRef<any>;

  private modalRef?: NgbModalRef; // Referencia al modal abierto. Recordar guardarla para poder cerrarlo.

  constructor(private modalService: NgbModal) {}
  ngOnInit() {
    this.libroForm = new FormGroup({
      titulo: new FormControl('', [
        Validators.required,
        Validators.maxLength(60),
      ]),
      descripcion: new FormControl('', [
        Validators.required,
        Validators.maxLength(500),
      ]),
      isbn: new FormControl('', [Validators.required, isbnValidator()]),
      miEditorial: new FormControl({ value: '', disabled: true }, [
        Validators.required,
        positiveIntegerValidator,
        notUndefinedValidator,
      ]),
      miAutor: new FormControl('', [
        Validators.required,
        positiveIntegerValidator,
      ]),
      cantEjemplares: new FormControl('', [positiveIntegerValidator]),
    });
  }
  openXl() {
    this.modalRef = this.modalService.open(this.content, { size: 'xl' });
  }
  closeModal() {
    if (this.modalRef) {
      this.modalRef.close();
    }
  }
  setNombreEditorial(id: number) {
    this.closeModal();
    this.libroForm.get('miEditorial')?.setValue(id);
  }
  onKeyDown(event: KeyboardEvent) {
    if (event.key === '-') {
      event.preventDefault();
    }
  }
}
