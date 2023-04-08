import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'principal'
  },
  {
    path: 'principal', loadChildren: () =>import('./documentoFiscal/documentoFiscal.module').then(m=>m.DocumentoFiscalModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
