import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AirQualityService {
  private baseUrl = 'https://api.openaq.org/v2';

  constructor(private http: HttpClient) {}

  getLatestByCity(city: string): Observable<any> {
    const params = new HttpParams().set('city', city);
    return this.http.get(`${this.baseUrl}/latest`, { params });
  }

  getAvailableCities(): Observable<any> {
    return this.http.get(`${this.baseUrl}/cities`);
  }
}
