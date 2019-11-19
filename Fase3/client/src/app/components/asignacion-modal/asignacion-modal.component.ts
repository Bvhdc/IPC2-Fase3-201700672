import { Component, Inject, OnInit } from '@angular/core';
import { AuxsService } from '../../services/auxs.service';
import { CursosService } from '../../services/cursos.service';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
export interface DialogData {
  CodigoAsignacion: 0;
  CarnetAuxiliar: number;
  CodigoCurso: number;
}

@Component({
  selector: 'app-asignacion-modal',
  templateUrl: './asignacion-modal.component.html',
  styleUrls: ['./asignacion-modal.component.css']
})
export class AsignacionModalComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<AsignacionModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private cursoService: CursosService, private auxService: AuxsService) {}
  cursos: any;
  auxs: any;
  ngOnInit(){
    this.getData();
  }
  getData(){
    this.cursoService.getCursos().subscribe(
      res => {
        this.cursos = res;
      },
      err => console.error(err)
    );
    this.auxService.getAuxs().subscribe(
      res => {
        this.auxs = res;
      },
      err => console.error(err)
    );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
