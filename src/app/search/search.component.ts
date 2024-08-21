import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/db.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent implements OnInit {
  public guides: any[] = [];
  public query: string | undefined;

  constructor(public route: ActivatedRoute, private db: DatabaseService) {}

  async ngOnInit() {
    this.route.params.subscribe(async (params) => {
      const query = params['query'];
      if (query !== '') {
        this.guides = await this.db.fetchGuideByCity(query);
        this.query = query;
      }
    });
  }
}
