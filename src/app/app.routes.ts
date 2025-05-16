import { Routes } from '@angular/router';
import { ImprintComponent } from './imprint/imprint.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';

export const routes: Routes = [
    { path: 'imprint', component: ImprintComponent },
    { path: 'data-protection', component: DataProtectionComponent },
];
