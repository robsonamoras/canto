import { CrmModule } from './customer-relationship-management/crm.module';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'crm', loadChildren: () =>
  import('./customer-relationship-management/crm.module').then(
    (p) => p.CrmModule
  ), }
];


@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    // { provide: APP_BASE_HREF, useValue: '/customer-relationship-management' },
  ], // para o module de rotas funcionar apartir de outra subpasta, é necessario essa config
})
export class AppRoutingModule {}
