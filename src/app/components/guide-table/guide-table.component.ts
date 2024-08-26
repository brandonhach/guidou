import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DatabaseService } from '../../services/db.service';
import { CommonModule } from '@angular/common';
import { PlaceSearchResult } from '../place-autocomplete/place-autocomplete.component';

@Component({
  selector: 'app-guide-table',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './guide-table.component.html',
  styles: ``,
})
export class GuideTableComponent {
  public guides: any[] = [];
  @Input() to: PlaceSearchResult | undefined;

  constructor(private db: DatabaseService) {}

  async ngOnInit() {
    if (this.to) {
      await this.db.fetchGuideByCity(this.to.address).then((guides) => {
        this.guides = guides;
      });
    }
  }
}
