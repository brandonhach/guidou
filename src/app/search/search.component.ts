import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/db.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AccuService } from '../services/accu.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {
  public guides: any[] = [];
  public query: string | undefined;
  public forecastData: any;
  fromValue: any;
  toValue: any;

  constructor(
    public route: ActivatedRoute,
    private db: DatabaseService,
    private accu: AccuService
  ) {}

  async ngOnInit() {
    this.route.params.subscribe(async (params) => {
      const query = params['query'];
      if (query !== '') {
        // this.guides = await this.db.fetchGuideByCity(query);
        // this.query = query;
        // console.log('query', query);
        // this.accu.getHourlyForecast(query).subscribe((data) => {
        //   console.log('Forecast', data);
        //   this.forecastData = data;
        // });
        this.fromValue = params['from']
          ? JSON.parse(params['from'])
          : undefined;
        this.toValue = params['to'] ? JSON.parse(params['to']) : undefined;
      }
    });
  }
}
