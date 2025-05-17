import { Routes } from '@angular/router';
import { ImprintComponent } from './imprint/imprint.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { AirQualityComponent } from './air-quality/air-quality.component';

export const routes: Routes = [
    { path: 'imprint', component: ImprintComponent },
    { path: 'air-quality', component: AirQualityComponent },
    { path: 'data-protection', component: DataProtectionComponent },
];
