import { Component } from '@angular/core';

import { PlaceAutocompleteComponent } from '../components/place-autocomplete/place-autocomplete.component';
import { CreateGuideFormComponent } from '../components/create-guide-form/create-guide-form.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [
    PlaceAutocompleteComponent,
    CreateGuideFormComponent,
    NgOptimizedImage,
  ],
  templateUrl: './create.component.html',
})
export class CreateComponent {}
