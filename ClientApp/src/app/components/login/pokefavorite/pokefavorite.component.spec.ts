import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokefavoriteComponent } from './pokefavorite.component';

describe('PokefavoriteComponent', () => {
  let component: PokefavoriteComponent;
  let fixture: ComponentFixture<PokefavoriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokefavoriteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokefavoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
