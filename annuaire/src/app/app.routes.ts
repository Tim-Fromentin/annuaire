import { Routes } from '@angular/router';
import { PeoplesList } from './components/peoples-list/peoples-list';
import { PeopleDetails } from './components/people-details/people-details';
import { NotFound } from './components/not-found/not-found';

export const routes: Routes = [
  { path: '', component: PeoplesList },
  {
    path: 'personnes/:uuid',
    component: PeopleDetails,
  },
  {
    path: '**',
    component: NotFound,
  },
];
