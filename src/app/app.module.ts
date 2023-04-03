import { CustomPaginatorService } from './shared/services/custom-paginator.service';
import { LOCALE_ID, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

// Module local
import { SharedModule } from './shared/shared.module';
import { CrmModule } from './customer-relationship-management/crm.module';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from 'src/material.module';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import pt from '@angular/common/locales/pt'
import { MatPaginatorIntl } from '@angular/material/paginator';

registerLocaleData(pt, 'pt')

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,



    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    // Module local
    CrmModule,
    AppRoutingModule,
    MaterialModule,
    SharedModule,
  ],
  providers: [{provide: LOCALE_ID, useValue: 'pt-BR'},
  {provide: MatPaginatorIntl, useClass: CustomPaginatorService }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
