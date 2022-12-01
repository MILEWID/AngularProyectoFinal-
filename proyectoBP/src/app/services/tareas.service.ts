import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders  } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { Tarea } from '../models/tarea';
const URL_API = environment.api;
import {  throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class TareasService {
  constructor(private http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  errorHandler(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

  getAll(): Observable<Tarea[]> {
    return this.http
      .get<Tarea[]>(`${URL_API}`)
      .pipe(map((data: any) => data.data));
  }

  create(tarea: Tarea): Observable<Tarea> {
    return this.http
      .post<Tarea>(`${URL_API}`, JSON.stringify(tarea), this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }
}
