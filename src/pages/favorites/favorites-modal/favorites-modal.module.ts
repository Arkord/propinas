import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FavoritesModalPage } from './favorites-modal';

@NgModule({
  declarations: [
    FavoritesModalPage,
  ],
  imports: [
    IonicPageModule.forChild(FavoritesModalPage),
  ],
})
export class FavoritesModalPageModule {}
