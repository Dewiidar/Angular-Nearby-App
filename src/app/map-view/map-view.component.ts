import {Component, OnInit} from '@angular/core';

@Component({
    templateUrl: './map-view.component.html',
    styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements OnInit {

    constructor() {
    }

    google: any;

    ngOnInit() {
    //     const mapProp = {
    //         center: new google.maps.LatLng(51.508742, -0.120850),
    //         zoom: 5,
    //         mapTypeId: google.maps.MapTypeId.ROADMAP
    //     };
    //     let map = new google.maps.Map(document.getElementById('googleMap'), mapProp);
    }

}
