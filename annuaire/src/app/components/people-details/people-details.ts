import { Component, computed, inject, input } from '@angular/core';
import { PeopleService } from '../../services/people-service.service';
import { People } from '../../models/people.model';
import { PeopleDetailCard } from '../people-detail-card/people-detail-card';
import { RouterLink } from '@angular/router';

@Component({
  imports: [PeopleDetailCard, RouterLink],
  selector: 'app-people-details',
  styleUrl: './people-details.css',
  templateUrl: './people-details.html',
})
export class PeopleDetails {
  readonly peopleService = inject(PeopleService);

  uuid = input<string>('');

  peopleDetail = computed(() => {
    return this.peopleService.getByUuid(this.uuid());
  });
}
