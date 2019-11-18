import { Component, OnInit } from '@angular/core';
import { AsignacioAuxiliarService } from '../../services/asignacio-auxiliar.service';
@Component({
  selector: 'app-aux-asignacion',
  templateUrl: './aux-asignacion.component.html',
  styleUrls: ['./aux-asignacion.component.css']
})
export class AuxAsignacionComponent implements OnInit {
  asignaciones: any = [];
  constructor(private asignacionAux: AsignacioAuxiliarService) { }

  ngOnInit() {
    this.getAsignaciones();
  }
  getAsignaciones() {
    this.asignacionAux.getAsignaciones().subscribe(
      res => {console.log(res);
        this.asignaciones = res;
      },
      err => console.error(err)
    );
  }

}
