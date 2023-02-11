import { Injectable } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';

@Injectable({
  providedIn: 'root',
})
export class CustomPaginatorService extends MatPaginatorIntl {
  constructor() {
    super();
    this.nextPageLabel = 'Próximo';
    this.previousPageLabel = 'Anterior';
    this.itemsPerPageLabel = 'Itens por página';
    this.firstPageLabel = 'Primeira página';
    this.lastPageLabel = 'Última página';
  }

  override getRangeLabel = function (page: any, pageSize: any, length: any) {
    if (length === 0 || pageSize === 0) {
      return '0 de ' + length;
    }
    length = Math.max(length, 0);
    const startIndex = page * pageSize;

    const endIndex =
      startIndex < length
        ? Math.min(startIndex + pageSize, length)
        : startIndex + pageSize;
    return startIndex + 1 + ' - ' + endIndex + ' de ' + length;
  };
}
