import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { PeoplesList } from './components/peoples-list/peoples-list';

@Component({
  imports: [RouterOutlet, Header, PeoplesList],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('annuaire');
}
