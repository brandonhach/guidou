import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { CommonModule } from '@angular/common';
import { DatabaseService } from '../../../services/db.service';

@Component({
  selector: 'app-guide-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './guide-form.component.html',
  styleUrl: './guide-form.component.css',
})
export class GuideFormComponent {
  guideForm: FormGroup;

  constructor(private auth: AuthService, private db: DatabaseService) {
    this.guideForm = new FormGroup({
      title: new FormControl(''),
      city: new FormControl(''),
      description: new FormControl(''),
      user_id: new FormControl(this.auth.fetchUserId()),
    });
  }

  onSubmit() {
    console.log('Form submitted:', this.guideForm?.value);
    console.log(this.guideForm.value.user_id);
    this.db.createGuide(
      this.guideForm.value.title,
      this.guideForm.value.city,
      this.guideForm.value.description,
      this.guideForm.value.user_id
    );
  }
}
