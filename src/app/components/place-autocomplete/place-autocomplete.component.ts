// place-autocomplete.component.ts
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';

export type PlaceSearchResult = {
  address: string;
  location?: google.maps.LatLng;
  imageUrl?: string;
  iconUrl?: string;
  name?: string;
};

@Component({
  selector: 'app-place-autocomplete',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, CommonModule],
  templateUrl: './place-autocomplete.component.html',
})
export class PlaceAutocompleteComponent implements OnInit {
  // Access input element with matching id.
  @ViewChild('inputField')
  inputField!: ElementRef;

  // Allow access to this var from parent component. Used as a placeholder value.
  @Input() placeholder = 'Enter city';

  // Output event that emits to parent component if placeChanged.emit({obj})
  @Output() placeChanged = new EventEmitter<PlaceSearchResult>();

  // Declaration for google.autocomplete
  autocomplete: google.maps.places.Autocomplete | undefined;

  constructor() {}

  ngOnInit(): void {}

  // Hook is called after componnent's & child view are fully initialized
  ngAfterViewInit() {
    // Ensure google API is fully loaded before accessing

    // Initialize Google Place Autocomplete instance
    this.autocomplete = new google.maps.places.Autocomplete(
      // Set arg to inputField value
      this.inputField.nativeElement
    );

    // Add a listener for when a place is selected
    this.autocomplete.addListener('place_changed', () => {
      const place = this.autocomplete?.getPlace();

      const result: PlaceSearchResult = {
        address: this.inputField.nativeElement.value,
        name: place?.name,
        location: place?.geometry?.location,
        iconUrl: place?.icon,
        imageUrl: this.getPhotoUrl(place),
      };

      // When result is filled, emitted.
      this.placeChanged.emit(result);
    });
  }

  getPhotoUrl(
    place: google.maps.places.PlaceResult | undefined
  ): string | undefined {
    return place?.photos && place.photos.length > 0
      ? place.photos[0].getUrl({ maxWidth: 500 })
      : undefined;
  }
}
