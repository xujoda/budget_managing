import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Transaction } from 'src/app/services/interfaces';
import { DatePipe } from '@angular/common';
import { Timestamp } from '@angular/fire/firestore';

@Component({
  selector: 'app-transaction-creating-dialog',
  templateUrl: './transaction-creating-dialog.component.html',
  styleUrls: ['./transaction-creating-dialog.component.scss']
})
export class TransactionCreatingDialogComponent {

  transaction:Transaction = {
    amount: 0,
    category: '',
    typeOfSpending: '',
    date: Timestamp.fromDate(new Date()),
    comment: ''
  }

  @Inject(MAT_DIALOG_DATA) public data: any

  constructor(
    public dialogRef: MatDialogRef<TransactionCreatingDialogComponent>) { }

  onCreate(): void {
    console.log(this.transaction.date)
    this.dialogRef.close(this.transaction)
  }

  onCancel(): void {
    this.dialogRef.close()
  }
}
