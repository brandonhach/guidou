import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/db.service';
import { Guide } from '../components/guide-table/guide-table.component';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-guide',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './guide.component.html',
})
export class GuideComponent implements OnInit {
  public guide: Guide | null = null;
  public isLoading: boolean = true;

  constructor(private db: DatabaseService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.db
        .getGuideById(id)
        .then((guide) => {
          this.guide = guide;
          this.isLoading = false;
          console.log(guide);
        })
        .catch((error) => {
          console.error('Error fetching guide by id:', error);
          this.isLoading = false;
        });
    });
  }
}
