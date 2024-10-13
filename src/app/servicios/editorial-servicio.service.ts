import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, catchError, throwError } from 'rxjs';
import { Editorial, EditorialCount } from '../models/editorial.model.js';
import {
  ApiResponseGetAll,
  ApiResponseGetOne,
} from '../models/apiResponse.models.js';
@Injectable({
  providedIn: 'root',
})
export class EditorialServicioService {
  constructor(private http: HttpClient) {}

  readonly baseurl = 'http://localhost:3000/api/editoriales';
  postEditorial(data: string): Observable<Editorial> {
    const objeto = { nombre: data };
    return this.http.post<Editorial>(this.baseurl, objeto);
  }
  updateEditorial(id: number, nombreEditorial: string): Observable<Editorial> {
    const objeto = { nombre: nombreEditorial };
    return this.http.patch<Editorial>(`${this.baseurl}/${id}`, objeto);
  }
  getEditoriales(): Observable<EditorialCount[]> {
    return this.http.get<ApiResponseGetAll<EditorialCount>>(this.baseurl).pipe(
      map((response) => response.data),
      catchError(this.handleError)
    );
  }
  getEditorial(id: number): Observable<Editorial> {
    return this.http
      .get<ApiResponseGetOne<Editorial>>(`${this.baseurl}/${id}`)
      .pipe(
        map((response) => response.data),
        catchError(this.handleError)
      );
  }

  deleteEditorial(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseurl}/${id}`);
  }

  private handleError(error: HttpErrorResponse) {
    console.error('Ocurrió un error', error);
    return throwError(
      () => new Error('Ocurrió un error al cargar las editoriales.')
    );
  } // Private para que no se pueda usar desde un componente.
}
