import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {
  PlaceAutocompleteComponent,
  PlaceSearchResult,
} from '../components/place-autocomplete/place-autocomplete.component';
import { PlaceDetailsCardComponent } from '../components/place-details-card/place-details-card.component';
import { MapDisplayComponent } from '../components/map-display/map-display.component';
import { GuideTableComponent } from '../components/guide-table/guide-table.component';

@Component({
  selector: 'app-explore',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    RouterLink,
    PlaceAutocompleteComponent,
    PlaceDetailsCardComponent,
    MapDisplayComponent,
    GuideTableComponent,
  ],
  templateUrl: './explore.component.html',
})
export class ExploreComponent {
  fromValue: PlaceSearchResult | undefined;
  toValue: PlaceSearchResult | undefined;
}
