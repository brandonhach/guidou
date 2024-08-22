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
    try {
      const res = await this.supabase.auth.signInWithOAuth({
        provider: 'github',
      });
      if (res.error) {
        console.error('Fail to sign in with Github', res.error);
        return;
      }
    } catch (error) {
      console.log('Unexpected error using Github OAuth', error);
    }
  }
  async signInWithDiscord() {
    try {
      const res = await this.supabase.auth.signInWithOAuth({
        provider: 'discord',
      });
      if (res.error) {
        console.error('Fail to sign in with Github', res.error);
        return;
      }
    } catch (error) {
      console.log('Unexpected error using Github OAuth', error);
    }
  }

  async signInWithGoogle() {
    try {
      const res = await this.supabase.auth.signInWithOAuth({
        provider: 'google',
      });
      if (res.error) {
        console.error('Fail to sign in with Github', res.error);
        return;
      }
    } catch (error) {
      console.log('Unexpected error using Github OAuth', error);
    }
  }

  async signOut() {
    await this.supabase.auth.signOut();
  }

  get currentUser() {
    return this.user.asObservable();
  }
}
