import {Component, OnInit} from '@angular/core';
import {LocationService} from '../shared/location.service';

@Component({
    templateUrl: './map-view.component.html',
    styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements OnInit {

    lat: number;
    lng: number;


    constructor(private locationService: LocationService) {
    }

    ngOnInit() {
        this.locationService.getLocation();
        this.lat = this.locationService.lat;
        this.lng = this.locationService.lon;
    }

}
