import { Component, OnInit } from '@angular/core';
import { ActividadService } from '../../services/actividad.service';
import { NavController } from '@ionic/angular';
import { AsignacionAuxService } from 'src/app/services/asignacion-aux.service';
import { AuxService } from 'src/app/services/aux.service';
@Component({
  selector: 'app-actividad-form',
  templateUrl: './actividad-form.page.html',
  styleUrls: ['./actividad-form.page.scss'],
})
export class ActividadFormPage implements OnInit {
  public actividad: any = {
    CodigoActividad: 0,
    Nombre: '',
    Descripcion: '',
    estado: 'activo',
    nota: 0,
    CodigoCurso: 0,
    tipo: '',
    fileDir: '',
    texto: ''
  };
  cursos: any = [];
  public userlogged: any;
  constructor(private actividadService: ActividadService, private NavCtrl: NavController,
              private asignacionauxService: AsignacionAuxService,private auxService: AuxService) { }

  ngOnInit() {
    this.userlogged = this.auxService.userlogged;
    this.getCursos();
  }
  saveActividad(idActividad: string) {

   this.actividadService.saveActividad(this.actividad).subscribe(
     res => {
      this.NavCtrl.navigateForward('/actividades');
     },
     err => console.error(err)
   );
  }
  getCursos() {

    this.asignacionauxService.getAsignacionesAux(this.userlogged.CarnetAuxiliar).subscribe(
      res => {console.log(res);
              this.cursos = res;
      },
      err => console.error(err)
    );
  }
}
