import { Component, Input } from '@angular/core';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { DatabaseService } from '../../services/db.service';
import { CommonModule } from '@angular/common';
import {
  PlaceSearchResult,
  PlaceAutocompleteComponent,
} from '../place-autocomplete/place-autocomplete.component';

@Component({
  selector: 'app-create-guide-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, PlaceAutocompleteComponent],
  templateUrl: './create-guide-form.component.html',
})
export class CreateGuideFormComponent {
  guideForm: FormGroup;
  @Input() to: PlaceSearchResult | undefined;

  constructor(private auth: AuthService, private db: DatabaseService) {
    this.guideForm = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      city: new FormControl('', Validators.required),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
      user_id: new FormControl(this.auth.fetchUserId(), Validators.required),
    });
  }

  onPlaceChanged(to: PlaceSearchResult) {
    this.guideForm.patchValue({ city: to.address });
  }

  onSubmit() {
    if (this.guideForm.invalid) {
      return;
    }

    this.db.createGuide(
      this.guideForm.value.title,
      this.guideForm.value.city,
      this.guideForm.value.description,
      this.guideForm.value.user_id
    );
  }
}
