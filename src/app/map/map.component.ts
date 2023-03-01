import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import maplibregl, { Map, Marker } from 'maplibre-gl';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, AfterViewInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    const key = "hqsOsSmk68YlMpXipvjq"
    var map = new maplibregl.Map({
        container: 'map',
        style:
            `https://api.maptiler.com/maps/streets-v2/style.json?key=${key}`,
        center: [14.3753, 62.0377], //sveg koordinater
        zoom: 4
    });

    // create the popup
    var popup = new maplibregl.Popup({ offset: 25 }).setText(
        'Daniel commited a very bad crime here!'
    );


    // create the marker
    new maplibregl.Marker()
        .setLngLat([13.2103506, 55.7159043])
        .setPopup(popup) // sets a popup on this marker
        .addTo(map);
  }

  ngOnDestroy() {
    // this.map?.remove();
  }

}