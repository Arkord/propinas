import { Favorite } from './models/favorite';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import {  FavoritesModalPage } from './favorites-modal/favorites-modal';
import { FavoritesService } from './favorites.service';
import { AngularFireList } from 'angularfire2/database';
import { Observable } from '@firebase/util';

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  private favoritesService: FavoritesService;
  private favorites: Observable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, _favoritesService : FavoritesService) {
    this.favoritesService = _favoritesService;
    console.log(this.favorites);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritesPage');
    console.log(this.favoritesService.GetAllFavoritesAF());
    this.favorites = this.favoritesService.GetAllFavoritesAF()
    .map(changes => {
      return changes.map(c => ({
        key: c.payload.key, ...c.payload.val()
      }))
    });
  }

  OnNew() {
    let modal = this.modalCtrl.create(FavoritesModalPage);
    console.log(modal);
    modal.present();
  }

}
