import { Component, OnInit } from '@angular/core';
import { Tarea } from '../models/tarea';
import { TareasService } from '../services/tareas.service';
@Component({
  selector: 'app-agrega',
  templateUrl: './agrega.component.html',
  styleUrls: ['./agrega.component.css'],
})
export class AgregaComponent implements OnInit {
  tarea: Tarea;
  constructor(private tsrv: TareasService) {
    this.tarea = {
      description: '',
      status: 0,
      id_author: 1,
      finish_at: '2022-06-03T21:47:23.000Z',
    };
  }

  ngOnInit(): void {}

  agregar() {
    this.tsrv.create(this.tarea).subscribe(res => {
      console.log('Tarea creada')
  }
}
