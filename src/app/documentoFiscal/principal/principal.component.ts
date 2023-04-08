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
    this.documentoFiscalService.imprimir(this.documentoFiscal);
  }

  limpar() {}
}
