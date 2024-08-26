import { Component } from '@angular/core';
import { GuideFormComponent } from '../shared/forms/guide-form/guide-form.component';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [GuideFormComponent],
  templateUrl: './create.component.html',
})
export class CreateComponent {}
