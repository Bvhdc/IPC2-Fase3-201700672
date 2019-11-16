import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  usuario: any = {
    CarnetEstudiante: 0,
    Nombre: '',
    CorreoElectronico: '',
    contra : '',
  };
  constructor() { }

  ngOnInit() {
  }

}
