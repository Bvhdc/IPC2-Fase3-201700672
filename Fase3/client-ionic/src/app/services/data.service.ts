import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Componente } from '../interfaces/interfaces';
import { EstudianteServiceService } from './estudiante-service.service';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient, private estudianteService: EstudianteServiceService) { }
  getMenuOpts() {
    if (this.estudianteService.userlogged) {
      return this.http.get<Componente[]>('/assets/data/menu.json');
    } else {
      return this.http.get<Componente[]>('/assets/data/menuAux.json');
    }
    }

}
