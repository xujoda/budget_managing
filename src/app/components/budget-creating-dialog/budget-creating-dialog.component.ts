import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Budget } from 'src/app/services/interfaces';

@Component({
  selector: 'app-budget-creating-dialog',
  templateUrl: './budget-creating-dialog.component.html',
  styleUrls: ['./budget-creating-dialog.component.scss']
})
export class BudgetCreatingDialogComponent {

  budget: Budget = { name: "main", amount: 0, free: 0 }

  @Inject(MAT_DIALOG_DATA) public data: any

  constructor(public dialogRef: MatDialogRef<BudgetCreatingDialogComponent>) { }

  onCreate(): void {
    this.budget.free = this.budget.amount
    this.dialogRef.close(this.budget)
  }

  onCancel(): void {
    this.dialogRef.close()
  }
}