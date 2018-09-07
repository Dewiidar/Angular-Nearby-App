import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IPlace} from './place';

@Injectable({
    providedIn: 'root'
})
export class PlacesService {
    lng: number;
    lat: number;

    private _placesUrl = 'https://backend-user-alb.qurba-dev.com/places/places/nearby?page=1';

    places: IPlace[];

    // Retreiving token from local storage
    token = localStorage.getItem('token');
    // authentication key
    // authKey = `JWT ${this.token}`;
    authKey = "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YWFkOWVkMzNmNGUyYTAwMGYzMjVlMDAiLCJyb2xlIjoiR1VFU1QiLCJpYXQiOjE1MzYzMzcyMzYsImV4cCI6MTU2Nzg5NDgzNn0.fKYGmqCsybAqqtO1QYPIupeHkDShzj7RjQmrj6GuTBc"
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


    // calling the places service to get data
    getPlaces(): Observable<any> {
        return this._http.post<any>(
            this._placesUrl,
            this.bodyData,
            this.httpOptions);
    }

    subscribeResponse() {
        this.getPlaces().subscribe(
            response => {
                this.places = response;
            },
            err => {
                console.log(err);
            }
        );
    }
}
