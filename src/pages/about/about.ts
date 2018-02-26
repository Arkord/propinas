import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage  } from '@ionic/storage';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  private propina: number;
  private preferencias: Storage;

  constructor(public navCtrl: NavController, _preferencias: Storage) {
    this.preferencias = _preferencias;
    this.preferencias.get('propina').then((valor) => {
      console.log(valor);
      if(valor != null) {
        this.propina = valor;
      }
      else {
        this.propina = 10;
      }
    });
  }

  Guardar() {
    this.preferencias.set('propina', this.propina);
  }

}
