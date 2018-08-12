import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { IPlace } from './place';

@Injectable({
    providedIn: 'root'
})
export class PlacesService {
    private _placesUrl = 'https://backend-user-alb.qurba-dev.com/places/places/nearby?page=1';

    private places: IPlace[];
    // Retreiving token from local storage
    currentUser = JSON.parse(localStorage.getItem('currentUser'));
    token = this.currentUser.token;

    // adjusting authentication key
    authKey = `JWT ${this.token}`;

    // POST request header
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': this.authKey
        })
    };

    // POST request body data
    bodyData = {
        'payload': {
            'lng': 29.9187387,
            'lat': 31.2505866
        }
    };

    constructor(private _http: HttpClient) {
    }

    getPlaces(): Observable<IPlace> {
        return this._http.post<IPlace>(
            this._placesUrl,
            this.bodyData,
            this.httpOptions);
    }
}
