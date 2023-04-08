import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DocumentoFiscal } from './model/DocumentoFiscal';
import { DocumentoFiscalService } from './services/DocumentoFiscalService.service';
import { getDateToday } from '../shared/Util';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss'],
})
export class PrincipalComponent {
  form: FormGroup;
  documentoFiscal!: DocumentoFiscal;

  constructor(
    private formBuilder: FormBuilder,
    private documentoFiscalService: DocumentoFiscalService
  ) {
    this.form = this.formBuilder.group({
      dtEmissao: [getDateToday()],
      numeroNota: [''],
      nmCliente: ['CONSTRUTORA BIAPÓ LTDA.'],
      endCliente: ['Av. Nossa Senhora de Copacabana, 308 Apto 511'],
      muniUfCliente: ['Rio de Janeiro RJ'],
      cnpjCliente: ['25.078.452/0003-89'],
      descServicos: [''],
      valor: [''],
      valorEx: [''],
      banco: ['Itaú Ag 7208 Cc 07296 2'],
      pix: ['allancosta030405@gmail.com'],
    });
  }

  imprimir() {
    this.documentoFiscal = this.form.value;
    window.open(
      `http://34.127.35.212:8080/documento-fiscal/pdf?dtEmissao=${this.documentoFiscal.dtEmissao}&numeroNota=${this.documentoFiscal.numeroNota}&nmCliente=${this.documentoFiscal.nmCliente}&endCliente=${this.documentoFiscal.endCliente}&muniUfCliente=${this.documentoFiscal.muniUfCliente}&cnpjCliente=${this.documentoFiscal.cnpjCliente}&descServicos=${this.documentoFiscal.descServicos}&valor=${this.documentoFiscal.valor}&valorEx=${this.documentoFiscal.valorEx}&banco=${this.documentoFiscal.banco}&pix=${this.documentoFiscal.pix}`,
      '_blank'
    );
    window.focus();
  }

  limpar() {
    this.form = this.formBuilder.group({
      dtEmissao: [''],
      numeroNota: [''],
      nmCliente: [''],
      endCliente: [''],
      muniUfCliente: [''],
      cnpjCliente: [''],
      descServicos: [''],
      valor: [''],
      valorEx: [''],
      banco: [''],
      pix: [''],
    });
  }
}
