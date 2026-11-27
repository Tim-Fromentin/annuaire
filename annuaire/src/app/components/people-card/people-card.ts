import { Component, input } from '@angular/core';
import { People } from '../../models/people.model';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-people-card',
  styleUrl: './people-card.css',
  templateUrl: './people-card.html',
})
export class PeopleCard {
  readonly people = input.required<People>();
}
