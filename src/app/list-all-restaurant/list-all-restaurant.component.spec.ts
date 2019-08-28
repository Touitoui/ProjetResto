import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllRestaurantComponent } from './list-all-restaurant.component';

describe('ListAllRestaurantComponent', () => {
  let component: ListAllRestaurantComponent;
  let fixture: ComponentFixture<ListAllRestaurantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAllRestaurantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAllRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
