import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    private costo: number;
    private propina: number;
    private totalPropina: number;
    private totalGlobal: number

  constructor(public navCtrl: NavController) {
    this.totalPropina = 0;
    this.totalGlobal = 0;
  }

  CalcularPropina() {
    this.totalPropina = this.costo * this.propina / 100;
    this.totalGlobal = this.costo * 1 + this.propina * 1;
  }

}
