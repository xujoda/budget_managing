import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetCreatingDialogComponent } from './budget-creating-dialog.component';

describe('BudgetCreatingDialogComponent', () => {
  let component: BudgetCreatingDialogComponent;
  let fixture: ComponentFixture<BudgetCreatingDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetCreatingDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BudgetCreatingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
