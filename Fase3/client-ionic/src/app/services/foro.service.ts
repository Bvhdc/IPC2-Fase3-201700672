import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ForoService {
  API_URL = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }
  getForoCurso(id: string) {
    return this.http.get(`${this.API_URL}/foros/${id}`);
  }
  getForo(id: string) {
    return this.http.get(`${this.API_URL}/foros/foro/${id}`);
  }
  saveForo(foro: any) {
    return this.http.post(`${this.API_URL}/foros`, foro);
  }
  saveComentario(comentario: any) {
    return this.http.post(`${this.API_URL}/foros/message`, comentario);
  }
}
