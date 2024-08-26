import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Tforecast } from '../../types/type';
import { ionCloud, ionSunny } from '@ng-icons/ionicons';
import { NgIconComponent, provideIcons } from '@ng-icons/core';

@Component({
  selector: 'app-forecast-box',
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  viewProviders: [
    provideIcons({
      ionSunny,
      ionCloud,
    }),
  ],
  templateUrl: './forecast-box.component.html',
})
export class ForecastBoxComponent {
  @Input() forecastData: Tforecast[] = [];
  @Input() query: string | undefined;
}
