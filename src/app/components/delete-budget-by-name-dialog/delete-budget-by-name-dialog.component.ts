import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-budget-by-name-dialog',
  templateUrl: './delete-budget-by-name-dialog.component.html',
  styleUrls: ['./delete-budget-by-name-dialog.component.scss']
})
export class DeleteBudgetByNameDialogComponent {

  budgetName:string = ''

  constructor(public dialogRef: MatDialogRef<DeleteBudgetByNameDialogComponent>) { }


  onDelete(): void {
    this.dialogRef.close(this.budgetName)
  }

  onCancel(): void {
    this.dialogRef.close()
  }
}
