import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListViewComponent } from './list-view/list-view.component';
import { MapViewComponent } from './map-view/map-view.component';
import {TokenService} from './shared/token.service';
import {HttpClientModule} from '@angular/common/http';
import {PlacesService} from './shared/places.service';
import {RouterModule} from '@angular/router';
import {LocationService} from './shared/location.service';
import { AgmCoreModule } from '@agm/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    AppComponent,
    ListViewComponent,
    MapViewComponent
  ],
  imports: [
    BrowserModule,
      BrowserAnimationsModule,
      MatProgressSpinnerModule,
      HttpClientModule,
      RouterModule.forRoot([
          {path: '', component: ListViewComponent},
          {path: 'mapView', component: MapViewComponent}
      ]),
      AgmCoreModule.forRoot({
          apiKey: 'AIzaSyBUA6R8PODZBeHr7CCrwmR_GZcStn_AS5A'
      })
  ],
  providers: [TokenService, PlacesService, LocationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
