import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  ionLogoApple,
  ionSearchSharp,
  ionCreate,
  ionBookSharp,
  ionLogIn,
  ionLogoDiscord,
} from '@ng-icons/ionicons';
import {
  diGoogleOriginal,
  diAndroidOriginal,
  diGithubOriginal,
} from '@ng-icons/devicon/original';
import { AuthService } from '../../services/auth.service';
import { User } from '@supabase/supabase-js';
import { map, Observable, startWith } from 'rxjs';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import cities from 'cities.json';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    RouterLink,
    NgIconComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './header.component.html',
  viewProviders: [
    provideIcons({
      ionLogoApple,
      diGoogleOriginal,
      ionSearchSharp,
      ionCreate,
      ionBookSharp,
      ionLogIn,
      diAndroidOriginal,
      diGithubOriginal,
      ionLogoDiscord,
    }),
  ],
})
export class HeaderComponent implements OnInit {
  user$: Observable<User | null>;
  searchForm: FormGroup;

  constructor(private auth: AuthService, private router: Router) {
    this.user$ = this.auth.currentUser;

    // Searchbar
    this.searchForm = new FormGroup({
      query: new FormControl(''),
    });
  }

  ngOnInit() {}

  async handleAuth(provider: string) {
    if (provider === 'GITHUB') {
      await this.auth.signInWithGithub();
    } else if (provider === 'DISCORD') {
      await this.auth.signInWithDiscord();
    } else {
      await this.auth.signInWithGoogle();
    }
  }

  async signOut() {
    await this.auth.signOut();
    this.router.navigate(['/']);
  }

  onSubmit() {
    const query = this.searchForm?.value.query;
    this.router.navigate(['/search', query]);
    // this.db.fetchGuideByCity(this.searchForm.value.query);
  }
}
