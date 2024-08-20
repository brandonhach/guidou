import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  ionLogoApple,
  ionSearchSharp,
  ionCreate,
  ionBookSharp,
  ionLogIn,
} from '@ng-icons/ionicons';
import { diGoogleOriginal } from '@ng-icons/devicon/original';
import { AuthService } from '../../services/auth.service';

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
export class HeaderComponent {
  userData = signal({});
  constructor(private auth: AuthService, private router: Router) {
    this.auth.currentUser.subscribe((user) => {
      console.log(user);
      this.userData.set(user?.user_metadata?.['email']);
    });
  }

  async handleAuth() {
    const response = await this.auth.signInWithGithub();
    console.log(response);
  }

  async signOut() {
    this.auth.signOut();
    this.router.navigate(['/']);
  }
}
