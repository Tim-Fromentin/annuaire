import { Component, inject } from '@angular/core';
import { PeopleService } from '../../services/people-service.service';

@Component({
  imports: [],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
  private readonly peopleService = inject(PeopleService);
  peopleCount = this.peopleService.count;
}
