import { TestBed, async } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app.routes';
import { HomeComponent } from './home.component';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HomeComponent
      ],
      imports: [
        RouterModule.forRoot(AppRoutes)
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'pmt-blog'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('pmt-blog');
  });

  it('should contain the router-outlet markup', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const appEl = fixture.debugElement.nativeElement;
    const routerEl = appEl.querySelectorAll('router-outlet');
    expect(routerEl.length).toBe(1, 'router-outlet exists in app component');
  });
});
