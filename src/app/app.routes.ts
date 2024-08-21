import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { ExploreComponent } from './explore/explore.component';
import { GuideComponent } from './guide/guide.component';
import { ErrorComponent } from './404/404.component';
import { SearchComponent } from './search/search.component';

export const routes: Routes = [
  // {
  //   path: '***',
  //   title: '404 Page',
  //   component: ErrorComponent,
  // },
  {
    path: '',
    pathMatch: 'full',
    title: 'Home Page',
    component: HomeComponent,
  },
  {
    path: 'auth',
    title: 'Auth Page',
    component: AuthComponent,
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
