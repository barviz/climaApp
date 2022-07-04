import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeolocationButtonComponent } from './geolocation-button.component';

describe('GeolocationButtonComponent', () => {
  let component: GeolocationButtonComponent;
  let fixture: ComponentFixture<GeolocationButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeolocationButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeolocationButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
