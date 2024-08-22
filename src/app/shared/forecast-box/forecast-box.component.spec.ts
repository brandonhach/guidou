import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastBoxComponent } from './forecast-box.component';

describe('ForecastBoxComponent', () => {
  let component: ForecastBoxComponent;
  let fixture: ComponentFixture<ForecastBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForecastBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForecastBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
