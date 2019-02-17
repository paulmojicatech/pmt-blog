import { Route } from '@angular/router';
import { BlogsComponent } from './blogs.component';

export const BlogRoutes: Route[] = [
    {
        path: 'blogs', component: BlogsComponent, pathMatch: 'full'
    }
];