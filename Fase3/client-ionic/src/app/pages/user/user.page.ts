import { Component, OnInit } from '@angular/core';
import { EstudianteServiceService } from '../../services/estudiante-service.service';
import { AsignacionService } from '../../services/asignacion.service';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  cursos: any = [];
  public userlogged: any;
  constructor(private navCtrl:NavController ,private estudianteService: EstudianteServiceService, private asignacionService: AsignacionService) { }

  ngOnInit() {
    this.userlogged = this.estudianteService.userlogged;
    this.getCursos();
  }
  getCursos() {

    this.asignacionService.getAsignacionesEstudiante(this.userlogged.CarnetEstudiante).subscribe(
      res => {
              this.cursos = res;
      },
      err => console.error(err)
    );
  }
  navigateForo(id: any){
    this.navCtrl.navigateForward('foros/' + id);
  }
}
