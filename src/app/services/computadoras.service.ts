import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Computadora } from '../interfaces/Computadora';

const url = 'http://localhost:3000/computadora/';

@Injectable({
  providedIn: 'root',
})
export class ComputadorasService {
  constructor(private http: HttpClient) {}

  getComputadoras() {
    return this.http.get<Computadora>(`${url}`);
  }

  getComputadoraById(id: string) {
    return this.http.get(`${url}${id}`);
  }
}
