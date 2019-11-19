import { Component, OnInit } from '@angular/core';
import { AsignacioAuxiliarService } from '../../services/asignacio-auxiliar.service';
import { MatDialog } from '@angular/material';
import {AsignacionModalComponent} from '../asignacion-modal/asignacion-modal.component';
@Component({
  selector: 'app-aux-asignacion',
  templateUrl: './aux-asignacion.component.html',
  styleUrls: ['./aux-asignacion.component.css',
  ]
})
export class AuxAsignacionComponent implements OnInit {
  asignaciones: any = [];
  animal: string;
  name: string;

  constructor(private asignacionAux: AsignacioAuxiliarService, private dialog: MatDialog) { }

  ngOnInit() {
    this.getAsignaciones();
  }
  getAsignaciones():void {
    this.asignacionAux.getAsignaciones().subscribe(
      res => {console.log(res);
              this.asignaciones = res;
      },
      err => console.error(err)
    );
  }
  deleteAux(id: String){}
  openDialog(): void {
    const dialogRef = this.dialog.open(AsignacionModalComponent, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}
