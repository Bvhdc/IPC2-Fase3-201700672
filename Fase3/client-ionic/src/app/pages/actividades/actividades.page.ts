import { Component, OnInit } from '@angular/core';
import { ActividadService } from 'src/app/services/actividad.service';
import { EstudianteServiceService } from 'src/app/services/estudiante-service.service';
import { AuxService } from 'src/app/services/aux.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.page.html',
  styleUrls: ['./actividades.page.scss'],
})
export class ActividadesPage implements OnInit {

  constructor(private actividadService: ActividadService, private estudianteService: EstudianteServiceService,
              private auxService: AuxService, private navCtrl: NavController) { }
  actividades: any = [];
  userlogged: any;

  ngOnInit() {
    if (this.estudianteService.userlogged) {
      this.userlogged = this.estudianteService.userlogged;
      this.getCursosEstudiante();
    } else {
      this.userlogged = this.auxService.userlogged;
      this.getCursosAux();
    }

  }
  getCursosAux() {

    this.actividadService.getActividadesAux(this.userlogged.CarnetAuxiliar).subscribe(
      res => {
              this.actividades = res;
      },
      err => console.error(err)
    );
  }
  getCursosEstudiante() {

    this.actividadService.getActividadesEstudiante(this.userlogged.CarnetEstudiante).subscribe(
      res => {
              this.actividades = res;
      },
      err => console.error(err)
    );
  }
  navigateForo(id: any) {
    this.navCtrl.navigateForward('/actividad-form');
  }
}
