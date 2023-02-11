import { CadastroComponent } from './cadastro/cadastro.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const crmRoutes: Routes = [{ path: 'crm', component: CadastroComponent }];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(crmRoutes)],
  exports: [RouterModule],
})
export class CrmRoutingModule {}
