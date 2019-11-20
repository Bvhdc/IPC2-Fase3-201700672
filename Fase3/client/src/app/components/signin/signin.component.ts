import { Component, OnInit } from '@angular/core';
import { EstudiantesService } from '../../services/estudiantes.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  estudiante: any = {
    CarnetEstudiante: 0,
    Nombre: '',
    CorreoElectronico: '',
    contra: ''
  };

  constructor(private estudianteService: EstudiantesService, private router: Router) { }

  ngOnInit() {
  }
  login(carne: number, pass: string) {
    if (carne == 1234 && pass == '1234' ) {
      this.router.navigate(['/users', 'admin']);
    } else {
    this.estudianteService.loginEstudiante(carne, pass).subscribe(
      res => {
        console.log(res);
        if (Object.keys(res).length > 0) {
        this.router.navigate(['/users', this.estudiante.CarnetEstudiante]);
        } else {
          console.log('funciona, talvez');
        }
      },
      err => {
        console.error(err);
        this.router.navigate(['/']);
      }
    );
    }
  }

}
