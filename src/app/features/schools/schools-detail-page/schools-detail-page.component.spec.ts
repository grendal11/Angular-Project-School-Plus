import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolsDetailPageComponent } from './schools-detail-page.component';

describe('SchoolsDetailPageComponent', () => {
  let component: SchoolsDetailPageComponent;
  let fixture: ComponentFixture<SchoolsDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolsDetailPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolsDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
