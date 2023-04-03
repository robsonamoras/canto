import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertModalComponent } from './components/alert-modal/alert-modal.component';
import { ButtonComponent } from './components/button/button.component';
import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MaterialModule } from 'src/material.module';

@NgModule({
  declarations: [AlertModalComponent, ButtonComponent, ConfirmModalComponent, NavbarComponent],
  imports: [CommonModule, MaterialModule],
  exports: [AlertModalComponent, NavbarComponent],
  entryComponents: [AlertModalComponent, ConfirmModalComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class SharedModule {}
