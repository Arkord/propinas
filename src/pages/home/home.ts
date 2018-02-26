import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage  } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    private costo: number;
    private propina: number;
    private totalPropina: number;
    private totalGlobal: number;
    public preferencias: Storage;

  constructor(public navCtrl: NavController, _preferencias: Storage) {
    this.propina = 0;
    this.totalPropina = 0;
    this.totalGlobal = 0;

    this.preferencias = _preferencias;

  }

  CalcularPropina() {
    this.totalPropina = this.costo * this.propina / 100;
    this.totalGlobal = this.costo * 1 + this.totalPropina * 1;
  }

  ionViewDidEnter() {
    this.preferencias.get('propina').then((valor) => {
      console.log(valor);
      if(valor != null) {
        this.propina = valor;
      }
    });
  }

}
