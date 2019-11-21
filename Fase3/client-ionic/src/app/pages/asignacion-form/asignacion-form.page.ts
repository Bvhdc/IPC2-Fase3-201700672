import { Component, OnInit } from '@angular/core';
import { CursoService } from '../../services/curso.service';
import { EstudianteServiceService } from '../../services/estudiante-service.service';
import { AsignacionService } from '../../services/asignacion.service';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-asignacion-form',
  templateUrl: './asignacion-form.page.html',
  styleUrls: ['./asignacion-form.page.scss'],
})
export class AsignacionFormPage implements OnInit {
  cursos: any = [];
  asignacion: any = {
    CodigoAsignacion: 0,
    CarnetEstudiante: '',
    CodigoCurso: '',
  };
  constructor(private cursoService: CursoService, private asignacionService: AsignacionService,
              private estudianteService: EstudianteServiceService, private NavCtrl: NavController) { }

  ngOnInit() {
    this.getCursos();
  }
  getCursos() {
    this.asignacion.CarnetEstudiante = this.estudianteService.userlogged.CarnetEstudiante;
    this.cursoService.getCursos().subscribe(
      res => {
        this.cursos = res;
      },
      err => console.error(err)
    );
  }
  asignarCurso(idCurso: any) {
    this.asignacion.CodigoCurso = idCurso;
    this.asignacionService.saveAsignacion(this.asignacion).subscribe(
      res => {
       this.NavCtrl.navigateForward('/user-tabs/user')
      },
      err => console.error(err)
    );
  }

}
