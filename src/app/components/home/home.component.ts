import { Component, OnInit } from '@angular/core';
import { Compus } from 'src/app/interfaces/Computadora';
import { ComputadorasService } from 'src/app/services/computadoras.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  computadoras: Compus[] = [];
  constructor(private cpuService: ComputadorasService) {}

  ngOnInit(): void {
    this.cpuService.getComputadoras().subscribe((cpu) => {
      cpu.compus.forEach((element) => {
        this.computadoras.push(element);
      });
    });
  }
}
