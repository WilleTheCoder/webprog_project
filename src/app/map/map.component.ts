import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import maplibregl, { Map, Marker, Popup } from 'maplibre-gl';
import { DataService } from '../data.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit, AfterViewInit, OnDestroy {
  private map: Map | null = null;
  private data: any;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    var flag = this.dataService.retrieveData();

    if (flag == undefined) {
      //fetch the data
      this.dataService.getData().subscribe((data: any) => {
        this.dataService.setData(data);
        this.data = data;
        console.log('fetched: ', this.data);
        this.afterDataLoaded();
      });
    } else {
      //already fetched-> just retrieve it. maybe fix so we dont have to refetch upon refresh
      this.data = this.dataService.retrieveData();
      console.log('retrieved: ', this.data);
      this.afterDataLoaded();
    }
  }

  private afterDataLoaded(): void {
    // This function is called after the data has been loaded, so we can safely use this.data here.
    console.log('data loaded', this.data);

    const key = 'hqsOsSmk68YlMpXipvjq';
    // var sw = new maplibregl.LngLat(55.16170490836214, 10.271987280734805);
    // var ne = new maplibregl.LngLat(69.49324066427884, 22.137221056967203);
    // var llb = new maplibregl.LngLatBounds(sw, ne);
    this.map = new maplibregl.Map({
      container: 'map',
      style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${key}`,
      center: [14.3753, 62.0377], //sveg koordinater
      zoom: 4,
      // maxZoom: 10,
      hash: true,
      interactive: true,
      // maxBounds: llb
    });

    //cuz typescript hate me
    interface MyData {
      datetime: string,
      id: string,
      location: { gps: string },
      name: string,
      summary: string,
      url: string
    }

    for (let el of Object.values(this.data) as MyData[]) {
      console.log('generate markers..');
      const gps: string = el.location.gps;    
      var coordinates = gps.split(',').map((k) => parseFloat(k));

      

      this.addMarker(coordinates[1], coordinates[0], this.createHTML(el), this.map);
    }
  }

  ngAfterViewInit() {
  }

  ngOnDestroy() {
    this.map?.remove();
  }

createHTML(mydata: any) {
  return `<ul class="list-group">
    <li class="list-group-item">
      <div><strong>Datetime:</strong> ${mydata.datetime}</div>
      <div><strong>ID:</strong> ${mydata.id}</div>
      <div><strong>Name:</strong> ${mydata.name}</div>
      <div class="text-right"><a href="https://polisen.se/${mydata.url}">Gå till händelse</a></div>
      <div class="mt-2"><strong>Location:</strong> ${mydata.location.gps}</div>
      <div class="mt-2"><strong>Summary:</strong> ${mydata.summary}</div>
    </li>
  </ul>`;
}



  
  

  addMarker(lng: number, lat: number, text: string, map: Map) {
    var popup = new maplibregl.Popup({ offset: 25 }).setHTML(text);

    new maplibregl.Marker()
      .setLngLat([lng, lat])
      .setPopup(popup) // sets a popup on this marker
      .addTo(map);
  }
}
