import { SharedModule } from './../shared/shared.module';
import { CrmRoutingModule } from './crm-routing.module';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from 'src/material.module';

@NgModule({
  declarations: [HomeComponent, CadastroComponent],
  imports: [
    CommonModule,
    CrmRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,

    MaterialModule
  ],
  exports: [
    HomeComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CrmModule { }
