import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PeopleDetailCard } from './people-detail-card';

describe('PeopleDetailCard', () => {
  let component: PeopleDetailCard;
  let fixture: ComponentFixture<PeopleDetailCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeopleDetailCard],
    }).compileComponents();

    fixture = TestBed.createComponent(PeopleDetailCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
