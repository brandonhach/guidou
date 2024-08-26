import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { PlaceSearchResult } from '../place-autocomplete/place-autocomplete.component';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ionCloud, ionPin, ionSunny } from '@ng-icons/ionicons';
import { AccuService } from '../../services/accu.service';
import { Tforecast } from '../../types/type';

@Component({
  selector: 'app-place-details-card',
  standalone: true,
  imports: [CommonModule, NgIconComponent, CommonModule, NgOptimizedImage],
  templateUrl: './place-details-card.component.html',
  viewProviders: [
    provideIcons({
      ionPin,
      ionSunny,
      ionCloud,
    }),
  ],
})
export class PlaceDetailsCardComponent implements OnInit {
  @Input() data: PlaceSearchResult | undefined;
  @Input() forecastData: Tforecast[] = [];

  constructor(private accu: AccuService) {}

  async ngOnChanges(changes: SimpleChanges) {
    if (changes['data'] && this.data && this.data !== undefined) {
      this.accu.getHourlyForecast(this.data.address).subscribe((data) => {
        this.forecastData = data;
      });
    }
  }

  getTime(dateTime: string): string {
    return new Date(dateTime).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
  }

  ngOnInit(): void {}
}
