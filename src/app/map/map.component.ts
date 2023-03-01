import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import maplibregl, { Map, Marker } from 'maplibre-gl';


const key = "hqsOsSmk68YlMpXipvjq"
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, AfterViewInit, OnDestroy {
  map: Map | undefined;

  @ViewChild('map')
  private mapContainer!: ElementRef<HTMLElement>;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    const initialState = { lng: 13.210324, lat: 55.715920, zoom: 10 };

    this.map = new Map({
      container: this.mapContainer.nativeElement,
      style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${key}`,
      center: [initialState.lng, initialState.lat],
      zoom: initialState.zoom
    });
    // add marker
    this.addMarker(13.210324, 55.715920, "#FF0000", this.map)
  }


  addMarker(lat: number, lng: number, color: string, map: Map) {
    new Marker({ color: color })
      .setPopup(new maplibregl.Popup().setText("yoyoyooy"))
      .setLngLat([lat, lng])
      .addTo(map);
  }


  ngOnDestroy() {
    this.map?.remove();
  }

}