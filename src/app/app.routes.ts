import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { ExploreComponent } from './explore/explore.component';
import { GuideComponent } from './guide/guide.component';
import { SearchComponent } from './search/search.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    title: 'Home Page',
    component: HomeComponent,
  },

  {
    path: 'create',
    title: 'Create Page',
    component: CreateComponent,
  },
  {
    path: 'explore',
    title: 'Explore Page',
    component: ExploreComponent,
  },
  {
    path: 'guide/:id',
    title: 'Guide Page',
    component: GuideComponent,
  },
  {
    path: 'search/:query',
    title: 'Search Page',
    component: SearchComponent,
  },
];
