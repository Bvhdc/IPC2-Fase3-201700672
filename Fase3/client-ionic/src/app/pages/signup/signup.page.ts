import { Component, OnInit } from '@angular/core';
import { EstudianteServiceService } from '../../services/estudiante-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  public usuario: any = {
    CarnetEstudiante: 0,
    Nombre: '',
    CorreoElectronico: '',
    contra: ''
  };
  constructor(private estudianteService: EstudianteServiceService,private router: Router) { }

  ngOnInit() {
  }
  saveNewEstudiante() {
    this.estudianteService.saveEstudiante(this.usuario)
      .subscribe(
        res => {console.log(res);
                this.router.navigate(['']); },
        err => console.error(err)
      );
  }
}
