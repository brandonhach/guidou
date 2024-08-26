import { Component, Input, OnInit } from '@angular/core';
import { PlaceSearchResult } from '../place-autocomplete/place-autocomplete.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-place-details-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './place-details-card.component.html',
})
export class PlaceDetailsCardComponent implements OnInit {
  @Input() data: PlaceSearchResult | undefined;

  ngOnInit(): void {}
}
