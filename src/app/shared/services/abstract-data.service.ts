import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, take, tap, throwError } from 'rxjs';
import { ModeloGenerico } from '../models/modelo-generico';

@Injectable({
  providedIn: 'root',
})
export class AbstractDataService {
  url!: string;
  private readonly API = 'environment.urlPrincipalAPI'; // aqui será colocada a url principal da api que deve está em variavel de ambientes
  private headers: HttpHeaders;
  private params: HttpParams = new HttpParams();
  constructor(protected http: HttpClient) {
    this.headers = new HttpHeaders();
    this.headers.append('Content-Type', 'application/json');
  }

  getAll<T extends ModeloGenerico>(modelo: T, urlAlternativa?: string) {
    this.url = this.montarUrl(modelo, urlAlternativa);
    return this.http.get<T[]>(this.url).pipe(tap(console.log));
  }

  getById<T extends ModeloGenerico>(
    filtro: any,
    modelo: T,
    urlAlternativa?: string
  ) {
    this.url = `${this.API}/${modelo.getKey()}/${filtro}`;
    this.http
      .get<T>(this.url, { headers: this.headers, params: this.params })
      .pipe(take(1), tap(console.log));
  }

  post<T extends ModeloGenerico>(
    objeto: T,
    modelo: T,
    urlAlternativa?: string
  ) {
    this.url = this.montarUrl(modelo, urlAlternativa);
    return this.http
      .post(this.url, objeto, { headers: this.headers })
      .pipe(take(1));
  }

  put<T extends ModeloGenerico>(objeto: T, modelo: T, urlAlternativa?: string) {
    this.url = this.montarUrl(modelo, urlAlternativa);
    return this.http.put(this.url, objeto).pipe(take(1));
  }

  delete<T extends ModeloGenerico>(
    filtro: any,
    modelo: T,
    urlAlternativa?: string
  ) {
    this.url = this.montarUrl(modelo, urlAlternativa);
    if (
      filtro &&
      filtro !== undefined &&
      filtro !== null &&
      Object.keys(filtro).length > 0
    ) {
      this.incluirFiltros(filtro);
    }
    return this.http
      .delete(this.url, { headers: this.headers, params: this.params })
      .pipe(take(1), catchError(this.handlerError));
  }

  montarUrl<T extends ModeloGenerico>(
    modelo: T,
    urlAlternativa?: string
  ): string {
    let url = `${this.API}/${modelo.getKey()}`;
    url =
      urlAlternativa !== null && urlAlternativa !== undefined
        ? `${url}/${urlAlternativa}`
        : url;
    return url;
  }

  private incluirFiltros(filtro?: any): void {
    this.params = new HttpParams();
    const chaves = Object.keys(filtro);
    const primeiroFiltro = true;
    for (let i = 0; i < chaves.length; i++) {
      const chave = chaves[1];
      const valor = filtro[chave];
      if (valor !== null && valor !== undefined && valor !== '') {
        this.params = this.params.set(chave, valor);
      }
    }
  }

  handlerError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do cliente
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, mensagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
