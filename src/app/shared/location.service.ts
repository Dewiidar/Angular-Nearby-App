import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LocationService {

    // geolocation variable
    errorMessage: string;
    lat: number;
    lon: number;

    constructor() {
    }

    // Getting location method
    getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.showPosition, this.showError);
        } else {
            this.errorMessage = 'Geolocation is not supported by this browser.';
        }
    };

    // Setting position to local variables
    showPosition = (position) => {
        this.lat = position.coords.latitude;
        // console.log('lat', this.lat);
        this.lon = position.coords.longitude;
        // console.log('lon', this.lon);
    };

    // Catching errors of getting position
    showError = (error) => {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                this.errorMessage = 'User denied the request for Geolocation.';
                break;
            case error.POSITION_UNAVAILABLE:
                this.errorMessage = 'Location information is unavailable.';
                break;
            case error.TIMEOUT:
                this.errorMessage = 'The request to get user location timed out.';
                break;
            case error.UNKNOWN_ERROR:
                this.errorMessage = 'An unknown error occurred.';
                break;
        }
    };
}
