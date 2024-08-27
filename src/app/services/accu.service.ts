import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, switchMap } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AccuService {
  private weatherURL = 'https://dataservice.accuweather.com/forecasts/v1';
  private locationURL =
    'https://dataservice.accuweather.com/locations/v1/cities';

  constructor(private http: HttpClient) {}

  getHourlyForecast(city: string): Observable<any> {
    return this.getCityCode(city).pipe(
      switchMap((cityCode) =>
        this.http.get<any>(
          `${this.weatherURL}/hourly/1hour/${cityCode}?apikey=${environment.ACCU_KEY}&details=false`
        )
      ),
      map((res) => {
        if (res) {
          return res;
        }
        throw new Error('Weather data not found');
      })
    );
  }

  getCityCode(city: string): Observable<any> {
    return this.http
      .get<any>(
        `${this.locationURL}/search?apikey=${environment.ACCU_KEY}&q=${city}`
      )
      .pipe(
        map((res) => {
          if (res) {
            return res[0].Key;
          }
          throw new Error('City not found');
        })
      );
  }
}
