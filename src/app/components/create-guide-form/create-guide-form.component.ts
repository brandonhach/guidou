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
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-guide-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, PlaceAutocompleteComponent],
  templateUrl: './create-guide-form.component.html',
})
export class CreateGuideFormComponent {
  guideForm: FormGroup;
  @Input() to: PlaceSearchResult | undefined;

  constructor(
    private auth: AuthService,
    private db: DatabaseService,
    private toastr: ToastrService
  ) {
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
      // Display toastr messages for each form control
      if (this.guideForm.controls['title'].errors) {
        if (this.guideForm.controls['title'].errors['required']) {
          this.toastr.error('Title is required.');
        }
        if (this.guideForm.controls['title'].errors['minlength']) {
          this.toastr.error('Title must be at least 3 characters long.');
        }
      }
      if (this.guideForm.controls['city'].errors) {
        if (this.guideForm.controls['city'].errors['required']) {
          this.toastr.error('City is required.');
        }
      }
      if (this.guideForm.controls['description'].errors) {
        if (this.guideForm.controls['description'].errors['required']) {
          this.toastr.error('Description is required.');
        }
        if (this.guideForm.controls['description'].errors['minlength']) {
          this.toastr.error('Description must be at least 10 characters long.');
        }
      }
      return;
    }

    this.db
      .createGuide(
        this.guideForm.value.title,
        this.guideForm.value.city,
        this.guideForm.value.description,
        this.guideForm.value.user_id
      )
      .then(() => {
        this.toastr.success('Guide created successfully!', 'Success');
      })
      .catch((error) => {
        this.toastr.error(
          'Failed to create guide. Please try again later.',
          'Error'
        );
        console.error('Error creating guide:', error);
      });
  }
}
