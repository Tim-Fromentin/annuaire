import { Component, input } from '@angular/core';
import { People } from '../../models/people.model';

@Component({
  imports: [],
  selector: 'app-people-card',
  styleUrl: './people-card.css',
  templateUrl: './people-card.html',
})
export class PeopleCard {
  readonly people = input.required<People>();
}
