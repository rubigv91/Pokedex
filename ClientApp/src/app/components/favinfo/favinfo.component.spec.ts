import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavinfoComponent } from './favinfo.component';

describe('FavinfoComponent', () => {
  let component: FavinfoComponent;
  let fixture: ComponentFixture<FavinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
