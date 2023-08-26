import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Canto } from './../../shared/models/canto';
import { AbstractDataService } from './../../shared/services/abstract-data.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {
  form!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private abstractDataService: AbstractDataService
  ) {}
  ngOnInit(): void {
    this.configurateForm();
  }

  configurateForm(): void {
    this.form = this.formBuilder.group({
      nome: ['', Validators.required],
      cpf: [''],
      celular: [''],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit(): void {
    this.abstractDataService.getAll(new Canto());
  }
}
