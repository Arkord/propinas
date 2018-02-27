import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { FavoritesPage } from '../favorites/favorites'

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tabPrincipal = HomePage;
  tabFavoritos = FavoritesPage;
  tabConfiguracion = AboutPage;

  constructor() {

  }
}
