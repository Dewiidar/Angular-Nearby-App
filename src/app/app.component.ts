import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'app';

    x = '';
    latlon: any;
    img_url: any;

    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.showPosition, this.showError);
        } else {
            this.x = 'Geolocation is not supported by this browser.';
        }
    }

    showPosition(position) {
        this.latlon = position.coords.latitude + ',' + position.coords.longitude;
        this.img_url = 'https://maps.googleapis.com/maps/api/staticmap?center='
            + this.latlon + '&zoom=14&size=400x300&key=AIzaSyBu-916DdpKAjTmJNIgngS6HL_kDIKU0aU';
        document.getElementById('mapholder').innerHTML = '<img src=\'' + this.img_url + '\'>';
    }

    showError(error) {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                this.x = 'User denied the request for Geolocation.';
                break;
            case error.POSITION_UNAVAILABLE:
                this.x = 'Location information is unavailable.';
                break;
            case error.TIMEOUT:
                this.x = 'The request to get user location timed out.';
                break;
            case error.UNKNOWN_ERROR:
                this.x = 'An unknown error occurred.';
                break;
        }
    }

    constructor() { }

    ngOnInit() {
        this.getLocation();
    }

}
