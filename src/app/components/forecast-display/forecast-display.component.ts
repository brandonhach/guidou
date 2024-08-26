import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ionCloud, ionSunny } from '@ng-icons/ionicons';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { Tforecast } from '../../types/type';
import { CommonModule } from '@angular/common';
import { AccuService } from '../../services/accu.service';
import { PlaceSearchResult } from '../place-autocomplete/place-autocomplete.component';
@Component({
  selector: 'app-forecast-display',
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  templateUrl: './forecast-display.component.html',
  viewProviders: [
    provideIcons({
      ionSunny,
      ionCloud,
    }),
  ],
})
export class ForecastDisplayComponent implements OnChanges {
  @Input() forecastData: Tforecast[] = [];
  @Input() dataValue: PlaceSearchResult | undefined;

  constructor(private accu: AccuService) {}

  async ngOnChanges(changes: SimpleChanges) {
    if (changes['dataValue'] && this.dataValue) {
      console.log(this.dataValue.address);
      this.accu.getHourlyForecast(this.dataValue.address).subscribe((data) => {
        this.forecastData = data;
        console.log(data);
      });
    }
  }

  getTime(dateTime: string): string {
    return new Date(dateTime).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
  }
}
