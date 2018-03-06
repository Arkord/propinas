import { Injectable } from '@angular/core';

@Injectable()
export class Config {
    static firebase = {
		apiKey: "AIzaSyCfAyg3R42cch-KwXXDrYcYCTvHFExd594",
        authDomain: "propinas-plus.firebaseapp.com",
        databaseURL: "https://propinas-plus.firebaseio.com",
        projectId: "propinas-plus",
        storageBucket: "propinas-plus.appspot.com",
        messagingSenderId: "252770008247"
	};
}