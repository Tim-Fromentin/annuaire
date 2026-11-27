import { Component, inject } from '@angular/core';
import { PeopleService } from '../../services/people-service.service';
import { PeopleCard } from '../people-card/people-card';

@Component({
  imports: [PeopleCard],
  selector: 'app-peoples-list',
  styleUrl: './peoples-list.css',
  templateUrl: './peoples-list.html',
})
export class PeoplesList {
  private readonly peopleService = inject(PeopleService);
  private readonly peoples = this.peopleService.peoples;
  readonly isLoading = this.peopleService.isLoading;
  readonly errorMessage = this.peopleService.errorMessage;
}
