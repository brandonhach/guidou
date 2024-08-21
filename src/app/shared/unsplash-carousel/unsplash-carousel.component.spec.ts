import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsplashCarouselComponent } from './unsplash-carousel.component';

describe('UnsplashCarouselComponent', () => {
  let component: UnsplashCarouselComponent;
  let fixture: ComponentFixture<UnsplashCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnsplashCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnsplashCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
