import { Favorite } from './models/favorite';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { FAVORITES } from './data/data-favorites';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class FavoritesService {

	private restaurantsListRef = this.db.list<Favorite>('restaurants');

	constructor(http: Http, private db: AngularFireDatabase) {
	
	}
	
	GetAllFavoritesAF() {
		return this.restaurantsListRef;
	}

	AddFavoriteAF(restaurant: Favorite) {
		return this.restaurantsListRef.push(restaurant);
	}
}