import { computed, inject, Service, signal } from '@angular/core';
import { People, PeopleResponse } from '../models/people.model';
import { firstValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

@Service()
export class PeopleService {
  private readonly http = inject(HttpClient);

  readonly isLoading = signal<boolean>(true);
  readonly errorMessage = signal<string | null>(null);
  readonly peoples = signal<People[]>([]);
  uuid = signal<string | undefined>(undefined);

  readonly count = computed(() => {
    return this.peoples().length;
  });

  private async getAll(): Promise<void> {
    try {
      const response = await firstValueFrom(
        this.http.get<PeopleResponse>(`${environment.apiURL}?seed=cda2&results=30&nat=fr`),
      );
      this.peoples.set(response.results);
    } catch (e) {
      console.error(e);
      this.errorMessage.set("L'annuaire est indisponible. Réessaie dans un instant.");
    } finally {
      this.isLoading.set(false);
    }
  }

  getByUuid(uuid: string): People | undefined {
    return this.peoples().find((people) => people.login.uuid === uuid);
  }

  constructor() {
    this.getAll();
  }
}
