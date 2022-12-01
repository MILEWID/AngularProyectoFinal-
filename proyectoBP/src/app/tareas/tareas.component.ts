import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TareasService } from '../services/tareas.service';
import { Tarea } from '../models/tarea';
import { Route } from '@angular/router';
@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {
  val: number;
  constructor(private tareSrv: TareasService) {
    this.val = 0;
  }
  tareas?: Observable<Tarea[]>;
  ngOnInit(): void {
    this.getAllTareas();
  }

  getAllTareas() {
    this.tareas = this.tareSrv.getAll();
  }

alerta(){
  if(this.val === 0 ){
    this.val = 1;
  }
  else{
    this.val = 0;
  }
}
 

}
