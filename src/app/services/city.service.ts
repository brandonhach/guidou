import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CityService {
  private apiUrl = 'https://api.api-ninjas.com/v1';

  constructor(private http: HttpClient) {}

  getCityInfo(city: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/city?name=}${city}`);
  }

  postData(payload: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/data`, payload);
  }
}
