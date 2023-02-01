import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullFreeBalanceComponent } from './full-free-balance.component';

describe('FullFreeBalanceComponent', () => {
  let component: FullFreeBalanceComponent;
  let fixture: ComponentFixture<FullFreeBalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullFreeBalanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullFreeBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
