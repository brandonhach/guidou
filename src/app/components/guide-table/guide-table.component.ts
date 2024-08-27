import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DatabaseService } from '../../services/db.service';
import { CommonModule } from '@angular/common';
import { PlaceSearchResult } from '../place-autocomplete/place-autocomplete.component';

export type Guide = {
  id: string;
  city: string;
  description: string;
  created_at: string;
  user_id: string;
  title: string;
};

@Component({
  selector: 'app-guide-table',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './guide-table.component.html',
})
export class GuideTableComponent implements OnChanges {
  public guides: Guide[] = [];
  public isLoading: boolean = false;
  @Input() to: PlaceSearchResult | undefined;

  constructor(private db: DatabaseService) {}

  async ngOnChanges(changes: SimpleChanges) {
    if (changes['to'] && this.to) {
      this.isLoading = true;
      try {
        this.guides = await this.db.fetchGuideByCity(this.to.address);
      } catch (error) {
        console.error('Error fetching guides:', error);
      } finally {
        this.isLoading = false;
      }
    }
  }
}
