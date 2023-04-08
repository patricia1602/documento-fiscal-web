import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { first } from 'rxjs/operators';
import { API } from '../../shared/Util';
import { DocumentoFiscal } from '../model/DocumentoFiscal';

@Injectable({
  providedIn: 'root',
})
export class DocumentoFiscalService {
  constructor(private httpClient: HttpClient) {}

  imprimir(record: DocumentoFiscal) {
    return this.httpClient
      .post<DocumentoFiscal>(`${API}/pdf`, record)
      .pipe(first());
  }
}
