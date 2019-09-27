import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'upeu-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  @Output() eventData = new EventEmitter();
  formTema: FormGroup;
  constructor(private formBuild: FormBuilder) { }

  ngOnInit() {
    this.formTema = this.formBuild.group({
      titulo: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      fecha: ['', [Validators.required]],
      asesor: ['', [Validators.required]],
    });
  }

  newTema() {
    if (this.formTema.valid) {
      this.eventData.emit(this.formTema.value);
    }
  }
  cancelarFormulario() {
    this.formTema.reset();
  }

}
