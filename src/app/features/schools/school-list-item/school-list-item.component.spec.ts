import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolListItemComponent } from './school-list-item.component';

describe('SchoolListItemComponent', () => {
  let component: SchoolListItemComponent;
  let fixture: ComponentFixture<SchoolListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
