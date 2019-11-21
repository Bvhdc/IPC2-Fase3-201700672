import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActividadService {

  API_URL = 'http://localhost:3000/api';
  constructor(private http: HttpClient) {

  }
  getAsignaciones() {
    return this.http.get(`${this.API_URL}/asignacion/estudiante`);
  }
  getActividadesAux(id: string) {
    return this.http.get(`${this.API_URL}/actividades/auxiliar/${id}`);
  }
  getActividadesEstudiante(id: string) {
    return this.http.get(`${this.API_URL}/actividades/user/${id}`);
  }
  deleteEstudiante(id: string) {
    return this.http.delete(`${this.API_URL}/users/${id}`);
  }
  updateEstudiante(id, updatedestudiante) {
    return this.http.put(`${this.API_URL}/users/${id}`, updatedestudiante);
  }
  saveActividad(actividad: any) {
    return this.http.post(`${this.API_URL}/actividades`, actividad);
  }
  
}
