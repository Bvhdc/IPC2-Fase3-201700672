import { Component, OnInit } from '@angular/core';
import { ForoService } from '../../services/foro.service';
import { ActivatedRoute } from '@angular/router';
import { EstudianteServiceService } from 'src/app/services/estudiante-service.service';

@Component({
  selector: 'app-foro',
  templateUrl: './foro.page.html',
  styleUrls: ['./foro.page.scss'],
})
export class ForoPage implements OnInit {
  foroid: any ;
  comentario: any = {
    comentario: ''

  };
  public comments;
  constructor(private foroService: ForoService, private activatedRoute: ActivatedRoute,
              private estudianteService: EstudianteServiceService) { }

  ngOnInit() {
    this.foroid = this.activatedRoute.snapshot.paramMap.get('idForo');
    this.comentario.idForo = this.foroid;
    this.comentario.CarnetEstudiante = this.estudianteService.userlogged.CarnetEstudiante;
    this.getForos();
  }
  getForos() {
    this.foroService.getForo(this.foroid).subscribe(
      res => {
              this.comments = res;
      },
      err => console.error(err)
    );
  }
  saveComment() {
    this.foroService.saveComentario(this.comentario).subscribe(
      res => {
              console.log(res);
              this.getForos();
      },
      err => console.error(err)
    );
  }


}
