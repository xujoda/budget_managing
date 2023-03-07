import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteBudgetByNameComponent } from './delete-budget-by-name-dialog.component';

describe('DeleteBudgetByNameComponent', () => {
  let component: DeleteBudgetByNameComponent;
  let fixture: ComponentFixture<DeleteBudgetByNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteBudgetByNameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteBudgetByNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
