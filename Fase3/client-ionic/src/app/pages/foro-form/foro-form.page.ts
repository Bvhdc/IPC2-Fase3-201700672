import { Component, OnInit } from '@angular/core';
import { ForoService } from 'src/app/services/foro.service';
import { ActivatedRoute } from '@angular/router'
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-foro-form',
  templateUrl: './foro-form.page.html',
  styleUrls: ['./foro-form.page.scss'],
})
export class ForoFormPage implements OnInit {
  public foro: any = {
    CodigoCurso: '',
    Titulo: '',
    idForo: 0,
    fecha: ''
  };

  constructor(private foroService: ForoService, private navCtrl: NavController,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.foro.CodigoCurso = this.activatedRoute.snapshot.paramMap.get('idCurso');
  }
  saveForo() {
    const date = new Date(this.foro.fecha).toDateString();
    console.log(date)
    this.foro.fecha = date;
    this.foroService.saveForo(this.foro)
    .subscribe(
      res => {console.log(res);
              this.navCtrl.navigateForward('/aux'); },
      err => console.error(err)
    );
  }

}
