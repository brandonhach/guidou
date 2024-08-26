import { Component, Input, OnInit } from '@angular/core';
import { PlaceSearchResult } from '../place-autocomplete/place-autocomplete.component';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ionPin } from '@ng-icons/ionicons';

@Component({
  selector: 'app-place-details-card',
  standalone: true,
  imports: [CommonModule, NgIconComponent, CommonModule, NgOptimizedImage],
  templateUrl: './place-details-card.component.html',
  viewProviders: [
    provideIcons({
      ionPin,
    }),
  ],
})
export class PlaceDetailsCardComponent implements OnInit {
  @Input() data: PlaceSearchResult | undefined;

  ngOnInit(): void {}
}
