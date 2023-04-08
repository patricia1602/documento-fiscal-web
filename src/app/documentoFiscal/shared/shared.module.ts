import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from './app-material/app-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
  ],
  imports: [AppMaterialModule, CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
  ],
})
export class SharedModule {}
