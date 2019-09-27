import { Component, OnInit } from '@angular/core';
import { TemaService } from './tema.service';

@Component({
  selector: 'upeu-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'curd-angular8';
  listaTemas = [];
  constructor(private temaService: TemaService) {

  }

  ngOnInit() {
    this.getList();
  }

  private getList() {
    this.temaService.getTemas$().subscribe(response => {
      this.listaTemas = response.data;
    });
  }
  public postTema(param) {
    this.temaService.postTemas$(param).subscribe(response => {
      this.listaTemas = response.data;
    });
  }
  eventUpdate($event) {
    this.editTema($event);
  }
  public editTema(param) {
    this.temaService.updateTemas$(param.id, param).subscribe(response => {
      this.listaTemas = response.data;
    });
  }
 
  eventDelete($event) {
    if (confirm('Seguro de Eliminar')) {
      this.deleteTema($event);
    }
  }
  public deleteTema(id) {
    this.temaService.deteleTemas$(id).subscribe(response => {
      this.listaTemas = response.data;
    });
  }
}
