import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  ionLogoApple,
  ionSearchSharp,
  ionCreate,
  ionBookSharp,
  ionLogIn,
} from '@ng-icons/ionicons';
import { diGoogleOriginal } from '@ng-icons/devicon/original';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, RouterLink, NgIconComponent],
  templateUrl: './header.component.html',
  viewProviders: [
    provideIcons({
      ionLogoApple,
      diGoogleOriginal,
      ionSearchSharp,
      ionCreate,
      ionBookSharp,
      ionLogIn,
    }),
  ],
})
export class HeaderComponent {}
