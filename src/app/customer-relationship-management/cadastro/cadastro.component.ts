import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  form!: FormGroup;
  constructor(private formBuilder: FormBuilder){

  }
  ngOnInit(): void {
    this.configurateForm();
  }

  configurateForm(): void{
    this.form = this.formBuilder.group({
      nome: ['', Validators.required]
    })
  }

  salvar(): void{
  }

}
