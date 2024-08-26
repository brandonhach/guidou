// map-display.component.ts
import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {
  GoogleMap,
  GoogleMapsModule,
  MapDirectionsService,
} from '@angular/google-maps';
import { PlaceSearchResult } from '../place-autocomplete/place-autocomplete.component';
import { map } from 'rxjs';

@Component({
  selector: 'app-map-display',
  standalone: true,
  imports: [CommonModule, GoogleMapsModule],
  templateUrl: './map-display.component.html',
})
export class MapDisplayComponent implements OnInit {
  // Reference GoogleMap instance in the HTML
  @ViewChild('map', { static: true }) map!: GoogleMap;

  // Inputs to receive datas from the parent component
  @Input() from: PlaceSearchResult | undefined;
  @Input() to: PlaceSearchResult | undefined;

  // Initial zoom level for Google Map
  zoom = 5;

  // Store the result of the direction request, used to display directions on the map
  directionResult: google.maps.DirectionsResult | undefined;

  // Position for a single marker; used when showing only one location
  markerPosition: google.maps.LatLng | undefined;

  // Inject MapDirectionsService to handle direction request
  constructor(private directionService: MapDirectionsService) {}

  ngOnInit(): void {}

  // Hook called when any @Input properties change
  ngOnChanges() {
    const fromLocation = this.from?.location;
    const toLocation = this.to?.location;

    // If both locations are provided, get directions between them
    if (fromLocation && toLocation) {
      this.getDirections(fromLocation, toLocation);
    } else if (fromLocation) {
      this.gotoLocation(fromLocation);
    } else if (toLocation) {
      this.gotoLocation(toLocation);
    }
    // Else move the map to that location (either else if statement)
  }

  // Func to move the map to a specific location & place marker there
  gotoLocation(location: google.maps.LatLng) {
    this.markerPosition = location;
    this.map.panTo(location);
    this.zoom = 17;
    this.directionResult = undefined;
  }

  // Func to get directions from 'from' location to the 'to' location
  getDirections(from: google.maps.LatLng, to: google.maps.LatLng) {
    const request: google.maps.DirectionsRequest = {
      origin: from,
      destination: to,
      travelMode: google.maps.TravelMode.DRIVING,
    };

    // Request directions from the MapDirectionsService
    this.directionService
      .route(request)
      .pipe(map((res) => res.result)) // Extract result from the response
      .subscribe((result) => {
        this.directionResult = result; // Store result
        this.markerPosition = undefined; // Clear marker pos when showing direction
      });
  }
}
