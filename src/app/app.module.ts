import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListViewComponent } from './list-view/list-view.component';
import { MapViewComponent } from './map-view/map-view.component';
import {TokenService} from './shared/token.service';
import {HttpClientModule} from '@angular/common/http';
import {PlacesService} from './shared/places.service';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ListViewComponent,
    MapViewComponent
  ],
  imports: [
    BrowserModule,
      HttpClientModule,
      RouterModule.forRoot([
          {path: '', component: ListViewComponent},
          {path: 'mapView', component: MapViewComponent}
      ])
  ],
  providers: [TokenService, PlacesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
