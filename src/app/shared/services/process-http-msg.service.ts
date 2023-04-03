import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProcessHTTPMsgService implements ErrorHandler {
  constructor() {}
  handleError(error: HttpErrorResponse | any) {
    let errMsg!: string;
    let errMsgEnviado: string = error.error;

    if (error.error instanceof ErrorEvent) {
      errMsg = error.error.message;
    } else {
      if (error.status == 400) {
        errMsg = `código do erro ${error.status} - Falha na chamada!`;
      } else if (error.status == 401) {
        errMsg = `código do erro ${error.status} - Chamada não autorizada!`;
      } else if (error.status == 403) {
        errMsg = `código do erro ${error.status} - Acesso negado!`;
      } else if (error.status == 404) {
        errMsg = `código do erro ${error.status} - Não encontrado!`;
      } else if (error.status == 409) {
        errMsg = `código do erro ${error.status} - Conflito!`;
      } else if (error.status == 500) {
        errMsg = `código do erro ${error.status} - Erro interno no servidor!`;
      } else if (error.status == 501) {
        errMsg = `código do erro ${error.status} - Chamada não implementada no servidor!`;
      } else if (error.status == 502) {
        errMsg = `código do erro ${error.status} - Resposta do servidor inválida(Bad gateway)!`;
      } else if (error.status == 503) {
        errMsg = `código do erro ${error.status} - Não disponível!`;
      } else if (error.status == 504) {
        errMsg = `código do erro ${error.status} - Tempo limite da requisição alcançado!`;
      } else if (error.status == 599) {
        errMsg = `código do erro ${error.status} - Tempo limite de rede alcançado!`;
      } else {
        errMsg = `código do erro ${error.status} - ${error.statusText || ''} ${
          error.error
        }`;
      }
    }
    return throwError(errMsg + errMsgEnviado);
  }
}
