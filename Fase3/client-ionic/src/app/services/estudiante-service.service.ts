import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EstudianteServiceService {
  public userlogged: any;
  API_URL = 'http://localhost:3000/api';
  constructor(private http: HttpClient) {

  }
  getEstudiantes() {
    return this.http.get(`${this.API_URL}/users`);
  }
  getEstudiante(id: string) {
    return this.http.get(`${this.API_URL}/users/${id}`);
  }
  deleteEstudiante(id: string) {
    return this.http.delete(`${this.API_URL}/users/${id}`);
  }
  updateEstudiante(id, updatedestudiante) {
    return this.http.put(`${this.API_URL}/users/${id}`, updatedestudiante);
  }
  saveEstudiante(estudiante: any) {
    return this.http.post(`${this.API_URL}/users`, estudiante);
  }
  loginEstudiante(id, contra) {
     return this.http.get(`${this.API_URL}/users/${id}/${contra}`)
  }

}
