import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tienda } from '../interfaces/Tiendas';

const url = 'http://localhost:3000/tiendas/';

@Injectable({
  providedIn: 'root',
})
export class TiendasService {
  constructor(private http: HttpClient) {}

  getTiendas() {
    return this.http.get<Tienda>(`${url}`);
  }
}
