import { Route } from '@angular/router';
import { HomeComponent } from './home.component';

export const AppRoutes: Route[] = [
    { path: '', component: HomeComponent, pathMatch: 'full' }   
];