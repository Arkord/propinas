import { Favorite } from './models/favorite';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { FAVORITES } from './data/data-favorites';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class FavoritesService {
	private http: Http;
	private result: any;

	constructor(http: Http, private db: AngularFireDatabase) {
		this.http = http;
		this.result = [];
	}

	GetAllFavorites() {
		return FAVORITES;
	}
	
	GetAllFavoritesAF() {
		return this.db.list('restaurants').snapshotChanges();
	}
}