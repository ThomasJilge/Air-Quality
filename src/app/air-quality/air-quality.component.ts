import { Component, OnInit } from '@angular/core';
import { AirQualityService } from '../air-quality.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-air-quality',
  templateUrl: './air-quality.component.html',
  styleUrls: ['./air-quality.component.scss'],
  imports: [FormsModule,
    CommonModule
  ]
})
export class AirQualityComponent implements OnInit {
  city: string = 'Bangkok';
  airData: any = null;
  currentTime: string = '';

  constructor(private airQualityService: AirQualityService) {}

  ngOnInit() {
    this.loadAirQuality(this.city);
    this.updateTime();
  }

  loadAirQuality(city: string) {
    this.airQualityService.getLatestByCity(city).subscribe({
      next: data => {
        console.log('API-Daten:', data);
        this.airData = data;
      },
      error: err => {
        console.error('Fehler beim Laden der Luftqualitätsdaten:', err);
      }
    });
  }

  updateTime() {
    const now = new Date();
    this.currentTime = now.toLocaleString('de-DE', {
      timeZone: 'Asia/Bangkok', // Zeitzone von Bangkok
      hour: '2-digit',
      minute: '2-digit',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  }
}

