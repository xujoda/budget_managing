import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionCreatingDialogComponent } from './transaction-creating-dialog.component';

describe('TransactionCreatingDialogComponent', () => {
  let component: TransactionCreatingDialogComponent;
  let fixture: ComponentFixture<TransactionCreatingDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionCreatingDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionCreatingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
