import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AsignacionService {

  API_URL = 'http://localhost:3000/api';
  constructor(private http: HttpClient) {

  }
  getAsignaciones() {
    return this.http.get(`${this.API_URL}/asignacion/estudiante`);
  }
  getAsignacionesEstudiante(id: string) {
    return this.http.get(`${this.API_URL}/asignacion/estudiante/${id}`);
  }
  deleteEstudiante(id: string) {
    return this.http.delete(`${this.API_URL}/users/${id}`);
  }
  updateEstudiante(id, updatedestudiante) {
    return this.http.put(`${this.API_URL}/users/${id}`, updatedestudiante);
  }
  saveAsignacion(estudiante: any) {
    return this.http.post(`${this.API_URL}/asignacion/estudiante`, estudiante);
  }
  loginEstudiante(id, contra) {
    return this.http.get(`${this.API_URL}/users/${id}/${contra}`);
  }
}
