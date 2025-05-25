import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AirQualityService {
  private baseUrl = '/api';

  constructor(private http: HttpClient) {}

  getLatestByCity(city: string): Observable<any> {
    const params = new HttpParams().set('city', city);
    return this.http.get(`${this.baseUrl}/v3/latest`, { params });

  }

  getAvailableCities(): Observable<any> {
    return this.http.get(`${this.baseUrl}/cities`, { });
  }
}



