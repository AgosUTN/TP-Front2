import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, catchError, throwError } from 'rxjs';
import { Editorial } from '../models/editorial.model.js';
import { ApiResponseGetAll } from '../models/apiResponseGetAll.model.js';
@Injectable({
  providedIn: 'root',
})
export class EditorialServicioService {
  constructor(private http: HttpClient) {}

  readonly baseurl = 'http://localhost:3000/api/editoriales';
  postEditorial(data: string): Observable<any> {
    const objeto = { nombre: data };
    return this.http.post<any>(this.baseurl, objeto);
  }
  getEditoriales(): Observable<Editorial[]> {
    return this.http.get<ApiResponseGetAll<Editorial>>(this.baseurl).pipe(
      map((response) => response.data),
      catchError(this.handleError)
    );
  }
  private handleError(error: HttpErrorResponse) {
    console.error('Ocurrió un error', error);
    return throwError(
      () => new Error('Ocurrió un error al cargar las editoriales.')
    );
  } // Private para que no se pueda usar desde un componente.
}
