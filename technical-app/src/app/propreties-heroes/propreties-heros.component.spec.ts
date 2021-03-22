import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropretiesHerosComponent } from './propreties-heros.component';

describe('PropretiesHerosComponent', () => {
  let component: PropretiesHerosComponent;
  let fixture: ComponentFixture<PropretiesHerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropretiesHerosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropretiesHerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
