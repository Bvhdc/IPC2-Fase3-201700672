import { Component, OnInit } from '@angular/core';
import { ForoService } from 'src/app/services/foro.service';
import { EstudianteServiceService } from 'src/app/services/estudiante-service.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-foros',
  templateUrl: './foros.page.html',
  styleUrls: ['./foros.page.scss'],
})
export class ForosPage implements OnInit {
  public foros: any = [];
  private cursoactivo: any;
  constructor(private activatedRoute: ActivatedRoute,
              private foroService: ForoService, private estudianteService: EstudianteServiceService, private navCtrl: NavController) { }

  ngOnInit() {
    this.cursoactivo = this.activatedRoute.snapshot.paramMap.get('idCurso');
    this.getForos();
  }
  getForos() {
    this.foroService.getForoCurso(this.cursoactivo).subscribe(
      res => {
              this.foros = res;
      },
      err => console.error(err)
    );
  }
  OpenForo(foro: any): void {
   
     this.navCtrl.navigateForward('/foro/' + foro);
   }

}
