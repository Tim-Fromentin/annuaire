import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PeoplesList } from './peoples-list';

describe('PeoplesList', () => {
  let component: PeoplesList;
  let fixture: ComponentFixture<PeoplesList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeoplesList],
    }).compileComponents();

    fixture = TestBed.createComponent(PeoplesList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
