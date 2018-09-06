import {Component, OnInit} from '@angular/core';
import {TokenService} from './shared/token.service';
import {PlacesService} from './shared/places.service';
import {LocationService} from './shared/location.service';
import {IPlace} from './shared/place';

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

    lng: number;
    lat: number;
    public token: string;

    constructor(private locationService: LocationService, private tokenService: TokenService) {
        this.locationService.getLocation();
    }

    initiateLocation() {
        this.locationService.getLocation();
    }

    initiateToken() {
        this.tokenService.getToken().subscribe(
            response => {
                this.token = response;
                // console.log(JSON.parse(response));

                localStorage.setItem('token', JSON.parse(response));
            },
            err => {
                this.tokenService.handleError(err);
            }
        );
    }

    ngOnInit() {
        // calling getting location

        this.initiateToken();

    }

    toggleMap(): void {
        this.showMap = !this.showMap;
        this.routerLinkVariable = !this.routerLinkVariable;
    }
}
