import { Injectable } from '@angular/core';
import { SupabaseClient, User, createClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment.development';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private supabase!: SupabaseClient;
  user = new BehaviorSubject<User | null>(null);

  constructor(private router: Router) {
    this.supabase = createClient(
      environment.supabase.url,
      environment.supabase.key
    );

    this.supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED') {
        this.user.next(session!.user);
      } else {
        this.user.next(null);
      }
    });

    this.fetchInitialUserData();
  }

  async fetchInitialUserData() {
    const { data: user } = await this.supabase.auth.getUser();
    this.user.next(user.user);
  }

  async fetchUserId() {
    const { data, error } = await this.supabase.auth.getUser();

    if (error) {
      console.error('Error fetching user:', error);
      return null;
    }
    return data.user.id || null;
  }

  async signInWithGithub() {
    await this.supabase.auth.signInWithOAuth({
      provider: 'github',
    });
  }
  async signInWithDiscord() {
    await this.supabase.auth.signInWithOAuth({
      provider: 'discord',
    });
  }

  async signInWithGoogle() {
    await this.supabase.auth.signInWithOAuth({
      provider: 'google',
    });
  }

  async signOut() {
    await this.supabase.auth.signOut();
  }

  get currentUser() {
    return this.user.asObservable();
  }
}
