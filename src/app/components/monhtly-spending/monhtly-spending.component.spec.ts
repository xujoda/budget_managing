import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonhtlySpendingComponent } from './monhtly-spending.component';

describe('MonhtlySpendingComponent', () => {
  let component: MonhtlySpendingComponent;
  let fixture: ComponentFixture<MonhtlySpendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonhtlySpendingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonhtlySpendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
