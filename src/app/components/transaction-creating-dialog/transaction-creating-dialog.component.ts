import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Budget, Transaction } from 'src/app/services/interfaces';
import { Timestamp } from '@angular/fire/firestore';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-transaction-creating-dialog',
  templateUrl: './transaction-creating-dialog.component.html',
  styleUrls: ['./transaction-creating-dialog.component.scss']
})
export class TransactionCreatingDialogComponent implements OnInit {

  budget:Budget[] = []
  selectedBudget?: Budget

  transaction:Transaction = {
    budgetName: '',
    amount: 0,
    category: '',
    typeOfSpending: '',
    posting: false,
    date: Timestamp.fromDate(new Date()),
    comment: ''
  }

  @Inject(MAT_DIALOG_DATA) public data: any

  constructor(
    public dialogRef: MatDialogRef<TransactionCreatingDialogComponent>,
    private dataService: DataService) { }

    ngOnInit(): void {
      this.dataService.getBudget().subscribe(budget => {
        this.budget = budget})
      }

  onCreate(): void {
    const result = {budget: this.selectedBudget, transaction: this.transaction}
    this.dialogRef.close(result)
  }

  onCancel(): void {
    this.dialogRef.close()
  }
}
