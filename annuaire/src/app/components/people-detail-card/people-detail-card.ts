import { Component, input } from '@angular/core';
import { People } from '../../models/people.model';

@Component({
  imports: [],
  selector: 'app-people-detail-card',
  styleUrl: './people-detail-card.css',
  templateUrl: './people-detail-card.html',
})
export class PeopleDetailCard {
  people = input.required<People>();
}
