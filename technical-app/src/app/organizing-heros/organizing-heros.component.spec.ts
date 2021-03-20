import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizingHerosComponent } from './organizing-heros.component';

describe('OrganizingHerosComponent', () => {
  let component: OrganizingHerosComponent;
  let fixture: ComponentFixture<OrganizingHerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizingHerosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizingHerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
