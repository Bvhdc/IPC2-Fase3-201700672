import { Component, OnInit } from '@angular/core';
import { EstudianteServiceService } from '../../services/estudiante-service.service';
import { NavController } from '@ionic/angular';
import { AuxService } from '../../services/aux.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public carnet: number;
  public contra: string;
  public tipo: string;
  public usuario: any;
  constructor(private estudianteService: EstudianteServiceService, private auxiliarService: AuxService, private NavCtrl: NavController) { }

  ngOnInit() {
  }
  InicioSesion() {
    console.log(this.tipo)
    if (this.carnet == 1234 && this.contra == '1234' ) {

    } else if (this.tipo == 'Estudiante') {
    this.estudianteService.loginEstudiante(this.carnet, this.contra).subscribe(
      res => {
        if (Object.keys(res).length > 0) {
          this.estudianteService.userlogged = res;
          this.usuario = res;
          if (this.usuario) {
            this.NavCtrl.navigateForward('/user-tabs');
            console.log(this.estudianteService.userlogged);
          }
        } else {
          console.log('funciona, talvez');
        }
      },
      err => {
        console.error(err);
      }
    );
  } else if (this.tipo == 'Auxiliar') {
    this.auxiliarService.loginAux(this.carnet, this.contra).subscribe(
      res => {
        if (Object.keys(res).length > 0) {
          this.auxiliarService.userlogged = res;
          this.usuario = res;
          if (this.usuario) {
            this.NavCtrl.navigateForward('/aux-tabs');
            console.log(this.estudianteService.userlogged);
          }
        } else {
          console.log('funciona, talvez');
        }
      },
      err => {
        console.error(err);
      }
    );
  }
  }
}
