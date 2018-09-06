import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {catchError, tap, map} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import {s} from '@angular/core/src/render3';

@Injectable({
    providedIn: 'root'
})
export class TokenService {

    token: string;

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


    getToken(): Observable<any> {
        return this._http.post<any>(
            this._tokenUrl,
            this.data,
            {headers: this.headers}).pipe(
                map(res => JSON.stringify(res.response.payload.jwt))
        );
    }

    public handleError(err: HttpErrorResponse) {
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }
}
