import { Component, OnInit } from '@angular/core';
import { TiendasService } from 'src/app/services/tiendas.service';
import { Tiend } from 'src/app/interfaces/Tiendas';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.scss'],
})
export class TiendaComponent implements OnInit {
  tiendas: Tiend[] = [];
  constructor(private tiendasService: TiendasService) {}

  ngOnInit(): void {
    this.tiendasService.getTiendas().subscribe((tienda) => {
      tienda.tiendas.forEach((element) => {
        this.tiendas.push(element);
      });
    });
  }
}
