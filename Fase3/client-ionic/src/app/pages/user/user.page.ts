import { Component, OnInit } from '@angular/core';
import { EstudianteServiceService } from '../../services/estudiante-service.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  constructor(private estudianteService: EstudianteServiceService) { }

  ngOnInit() {
    console.log(this.estudianteService.userlogged);
  }

}
