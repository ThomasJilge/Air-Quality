import { Component } from '@angular/core';
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
export class AirQualityComponent {
  // city: string = '';
  // searchCity = '';
  // airData: any;

  // constructor(private airQualityService: AirQualityService) {}

  // search() {
  //   if (!this.searchCity.trim()) {
  //     alert('Bitte eine Stadt eingeben!');
  //     return;
  //   }
  //   this.airQualityService.getLatestByCity(this.searchCity.trim()).subscribe({
  //     next: (data) => {
  //       this.airData = data;
  //     },
  //     error: (err) => {
  //       console.error(err);
  //       alert('Fehler beim Laden der Daten.');
  //     },
  //   });
  // }
}
