import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { FAVORITES } from './data/data-favorites';

@Injectable()
export class FavoritesService {
	private http: Http;
	private result: any;

	constructor(http: Http) {
		this.http = http;
		this.result = [];
	}

	GetAllFavorites() {
		let url = 'http://www.operhum.com/ords/runcanrol/api/areasg/';
		return FAVORITES;
    }
}