import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class TokenService {

    private _tokenUrl = 'https://backend-user-alb.qurba-dev.com/auth/login-guest/';

    headers = new HttpHeaders({
        'Content-Type': 'application/json'
    });

    data = {
        'payload': {
            'deviceId': '1234567890'
        }
    };


    constructor(private _http: HttpClient) {

    }


    getToken() {
        return this._http.post(
            this._tokenUrl,
            this.data,
            {headers: this.headers});
    }
}
