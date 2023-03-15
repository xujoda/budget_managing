import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from 'src/app/services/data.service';
import { Budget, Transaction } from 'src/app/services/interfaces';
import { TransactionCreatingDialogComponent } from '../transaction-creating-dialog/transaction-creating-dialog.component';
import { TransactionInfoDialogComponent } from '../transaction-info-dialog/transaction-info-dialog.component';

@Component({
  selector: 'app-monhtly-spending',
  templateUrl: './monhtly-spending.component.html',
  styleUrls: ['./monhtly-spending.component.scss']
})
export class MonhtlySpendingComponent implements OnInit {

  budget: Budget[] = []
  transactions?: Transaction[] = []
  dateOfFilter: Date = new Date()

  constructor(private dataService: DataService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getBudget()
    this.getMonthlyTransactions()
  }

  getBudget(){
    this.dataService.getBudget().subscribe(budget => {
      this.budget = budget
    })
    
    this.dataService.getAllTransactions().subscribe(transactions => this.transactions = transactions)
  }

  openTransactionCreatingDialog(){
    const dialogRef = this.dialog.open(TransactionCreatingDialogComponent)

    dialogRef.afterClosed().subscribe(result => {
      if (result){
        this.dataService.updateBudgetByTransaction(this.budget[0],result)
      }
    })
  } 

  getMonthlyTransactions(){
    this.dataService.getMonthlyTransactions().subscribe(transactions => {
      this.transactions = transactions
    })
  }

  getTransactionInfo(transaction: Transaction){
    const dialogRef = this.dialog.open(TransactionInfoDialogComponent, {
      data: { transaction: transaction }
    });    
  }

  getMonthlyTransactionsByDate(){
    this.dataService.getMonthlyTransactionsByDate(this.dateOfFilter).subscribe(transactions =>{
      this.transactions = transactions
    })
  }
}