import {Component, OnInit} from '@angular/core';
import {TokenService} from './shared/token.service';
import {PlacesService} from './shared/places.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    // variables of changing routes between list and map view
    showMap = false;
    public routerLinkVariable = false;
    public listLink = ['/'];
    public mapLink = ['/mapView'];

    // alternating map icon
    public mapIcon = '../assets/images/ic_map%20view.png';
    public listIcon = '../assets/images/list%20view.png';

    // geolocation variable
    errorMessage: string;
    lat: number;
    lon: number;

    // authorization token
    token: string;

    // main data
    data: any;

    // Getting location method
    public getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.showPosition, this.showError);
        } else {
            this.errorMessage = 'Geolocation is not supported by this browser.';
        }
    };

    public showPosition = (position) => {
        this.lat = position.coords.latitude;
        console.log('lat', this.lat);
        this.lon = position.coords.longitude;
        console.log('lon', this.lon);

    };

    public showError = (error) => {
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

    constructor(private tokenService: TokenService, public placeService: PlacesService) {
    }

    ngOnInit() {
        // calling getting location
        this.getLocation();

        // getting web token id via tokenService
        this.tokenService.getToken().subscribe(
            response => {
                this.token = response.response.payload.jwt;
                localStorage.setItem('currentUser', JSON.stringify({token: this.token, name: name}));

            },
            err => {
                console.log('Error occured');
            },
            (): void => {

                // Getting the data on completion of authorisation
                // assigning token to the places service
                this.placeService.token = this.token;
                console.log(this.placeService.authKey);

                // calling the places service to get data
                this.placeService.getPlaces()
                    .subscribe(
                        responseData => {
                            this.data = responseData.response.payload;
                            console.log(this.data);
                        }
                    );
            }
        );
    }

    toggleMap(): void {
        this.showMap = !this.showMap;
        this.routerLinkVariable = !this.routerLinkVariable;
    }
}
