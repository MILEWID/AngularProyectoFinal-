import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TareasComponent } from './tareas/tareas.component';
import { AgregaComponent } from './agrega/agrega.component';

const routes: Routes = [
  { path: 'dashboard', component: TareasComponent  } ,
  { path: 'agregar', component: AgregaComponent  } ,
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
