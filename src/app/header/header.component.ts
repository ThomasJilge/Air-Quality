import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AirQualityService } from '../air-quality.service';

@Component({
  selector: 'app-header',
  imports: [FormsModule,
    CommonModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  city: string = '';
  searchCity = '';
  airData: any;

  constructor(private airQualityService: AirQualityService) {}

  search() {
    if (!this.searchCity.trim()) {
      alert('Bitte eine Stadt eingeben!');
      return;
    }
    this.airQualityService.getLatestByCity(this.searchCity.trim()).subscribe({
      next: (data) => {
        this.airData = data;
      },
      error: (err) => {
        console.error(err);
        alert('Fehler beim Laden der Daten.');
      },
    });
  }

}
