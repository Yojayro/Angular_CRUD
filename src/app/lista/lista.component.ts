import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'upeu-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  @Input() listaTemas = [];
  @Output() eventDelete = new EventEmitter();
  @Output() eventUpdate = new EventEmitter();

  idSelected: string;
  // isUpdate: boolean;
  constructor() { }

  ngOnInit() {
  }

  onDelete(id) {
    this.eventDelete.emit(id);
  }
  onUpdate(id) {
    this.idSelected = id;
    // this.isUpdate = true;
  }
  onSaveUpdate(tema) {
    this.eventUpdate.emit(tema);
    this.idSelected = '';
  }
  onCancel() {
    this.idSelected = '';
    // this.isUpdate = false;
  }

}
