import { Favorite } from './models/favorite';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import {  FavoritesModalPage } from './favorites-modal/favorites-modal';
import { FavoritesService } from './favorites.service';
import { AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {

  private favoritesService: FavoritesService;
  favoritesList$: Observable<Favorite[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, _favoritesService : FavoritesService) {
    this.favoritesService = _favoritesService;
    

    this.favoritesList$ = this.favoritesService
    .GetAllFavoritesAF()
    .snapshotChanges()
    .map(
      changes => {
        return changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        }))
      }
    )
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritesPage');
    console.log(this.favoritesList$);
    
  }

  OnNew() {
    let modal = this.modalCtrl.create(FavoritesModalPage);
    console.log(modal);
    modal.present();
  }

}
