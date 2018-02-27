import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-favorites-modal',
  templateUrl: 'favorites-modal.html',
})
export class FavoritesModalPage {
  private viewCtrl: ViewController;

  constructor(public navCtrl: NavController, public navParams: NavParams, _viewCtrl: ViewController) {
    this.viewCtrl = _viewCtrl;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritesModalPage');
  }

  OnClose() {
    this.viewCtrl.dismiss();
  }

}
