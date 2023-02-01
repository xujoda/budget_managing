import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailySpendingComponent } from './daily-spending.component';

describe('DailySpendingComponent', () => {
  let component: DailySpendingComponent;
  let fixture: ComponentFixture<DailySpendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailySpendingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailySpendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
