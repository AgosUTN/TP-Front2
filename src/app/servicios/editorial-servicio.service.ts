import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EditorialServicioService {
  constructor(private http: HttpClient) {}

  readonly baseurl = 'http://localhost:3000/api/editoriales';
  postEditorial(data: any): Observable<any> {
    const objeto = { nombre: data };
    return this.http.post<any>(this.baseurl, objeto);
  }
}
