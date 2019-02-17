import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { BlogRoutes } from './blogs.routes';
import { BlogsComponent } from './blogs.component';

@NgModule({
    declarations: [ BlogsComponent ],
    imports: [
        RouterModule.forChild(BlogRoutes)
    ],
    exports: [
        BlogsComponent
    ]
})

export class BlogsModule {

 }


