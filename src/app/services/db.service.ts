import { environment } from '../../environments/environment.development';
import { Injectable } from '@angular/core';
import { SupabaseClient, createClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      environment.supabase.url,
      environment.supabase.key
    );
  }

  async fetchGuideByCity(city: string): Promise<any[]> {
    try {
      const { data, error } = await this.supabase
        .from('guide')
        .select('*')
        .eq('city', city);
      if (error) {
        console.error('Error finding guide:', error);
        return [];
      } else {
        console.log(data);
        return data || [];
      }
    } catch (error) {
      console.error('Unexpected error:', error);
      return [];
    }
  }

  async getGuideById(id: string): Promise<any[]> {
    try {
      const { data, error } = await this.supabase
        .from('guide')
        .select('*')
        .eq('id', id);
      if (error) {
        console.error('Error finding guide by id:', error);
        return [];
      } else {
        return data || [];
      }
    } catch (error) {
      console.error('Unexpected error:', error);
      return [];
    }
  }

  async createGuide(
    title: string,
    city: string,
    description: string,
    userId: any
  ) {
    const extractedUserId = userId.__zone_symbol__value;
    return this.supabase
      .from('guide')
      .insert({ title, city, description, user_id: extractedUserId })
      .then((res) => {
        if (res.error) {
          console.error('Error creating guide:', res.error);
        } else {
          console.log('Guide created successfully:', res.data);
        }
        return res;
      });
  }

  updateGuide(id: string, updates: any) {
    return this.supabase.from('guide').update(updates).eq('id', id);
  }

  deleteGuide(id: string) {
    return this.supabase.from('guide').delete().eq('id', id);
  }
}
