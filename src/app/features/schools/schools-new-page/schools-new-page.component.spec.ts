import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolsNewPageComponent } from './schools-new-page.component';

describe('SchoolsNewPageComponent', () => {
  let component: SchoolsNewPageComponent;
  let fixture: ComponentFixture<SchoolsNewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolsNewPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolsNewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
