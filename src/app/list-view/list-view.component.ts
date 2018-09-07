import {Component, OnInit} from '@angular/core';
import {IPlace} from '../shared/place';
import {PlacesService} from '../shared/places.service';
import {filter, map} from 'rxjs/operators';

@Component({
    templateUrl: './list-view.component.html',
    styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {


    // main data
    places: IPlace[] = [];

    // loading spinner
    color = 'red';
    mode = 'indeterminate';
    value = 50;
    diameter = 50;
    strokeWidth = 3;
    isLoading = true;

    constructor(private placeService: PlacesService) {
    }

    initiatePlaces() {

        this.placeService.getPlaces().subscribe(
            response => {
                let responseArray = [];

                responseArray = Object.keys(response).map(function(key) {
                    return [response[key]];
                });

                this.places = responseArray[0][0].payload;

                console.log(this.places);

            },
            err => {
                console.log(err);
            },
            () => {
                this.isLoading = !this.isLoading;
            }
        );
    }

    ngOnInit() {
        this.initiatePlaces();
    }

}
