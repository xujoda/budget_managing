import { Component, Inject } from '@angular/core';
import { Timestamp } from '@angular/fire/firestore';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from 'src/app/services/data.service';
import { Budget, Transaction } from 'src/app/services/interfaces';

@Component({
  selector: 'app-transaction-info-dialog',
  templateUrl: './transaction-info-dialog.component.html',
  styleUrls: ['./transaction-info-dialog.component.scss']
})
export class TransactionInfoDialogComponent{

  transaction:Transaction = {
    budgetName: 'main',
    amount: 0,
    category: '',
    typeOfSpending: '',
    posting: false,
    date: Timestamp.fromDate(new Date()),
    comment: ''
  }

  budget:Budget ={name:'main',amount:0,free:0}
  newDate: Timestamp = Timestamp.fromDate(new Date())
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,public dialogRef: MatDialogRef<TransactionInfoDialogComponent>,
    private dataService: DataService) 
    {
      this.transaction = data.transaction
      this.budget = data.budget
    }

  onCancel(): void {
    this.dialogRef.close()
  }

  posting(){
    this.transaction.date = this.newDate
    this.dataService.updateBudgetByPostTransaction(this.budget,this.transaction)
  }

  deleteTransaction(){
    this.dataService.deleteTransaction(this.transaction,this.budget)
    this.onCancel()
  }
}
