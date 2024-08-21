import { Component } from '@angular/core';
import { UnsplashComponent } from '../shared/unsplash/unsplash.component';
import { UnsplashCarouselComponent } from '../shared/unsplash-carousel/unsplash-carousel.component';
import { GuideFormComponent } from '../shared/forms/guide-form/guide-form.component';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [UnsplashComponent, UnsplashCarouselComponent, GuideFormComponent],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
})
export class CreateComponent {}
