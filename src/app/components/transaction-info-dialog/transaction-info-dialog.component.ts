import { Component, Inject, OnInit } from '@angular/core';
import { Timestamp } from '@angular/fire/firestore';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Transaction } from 'src/app/services/interfaces';

@Component({
  selector: 'app-transaction-info-dialog',
  templateUrl: './transaction-info-dialog.component.html',
  styleUrls: ['./transaction-info-dialog.component.scss']
})
export class TransactionInfoDialogComponent{

  transaction:Transaction = {
    amount: 0,
    category: '',
    typeOfSpending: '',
    posting: false,
    date: Timestamp.fromDate(new Date()),
    comment: ''
  }
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,public dialogRef: MatDialogRef<TransactionInfoDialogComponent>) {
      this.transaction = data.transaction;
    }

  onCancel(): void {
    this.dialogRef.close()
  }
}
