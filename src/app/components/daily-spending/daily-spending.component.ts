import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from 'src/app/services/data.service';
import { Budget, Transaction } from 'src/app/services/interfaces';
import { TransactionCreatingDialogComponent } from '../transaction-creating-dialog/transaction-creating-dialog.component';
import { TransactionInfoDialogComponent } from '../transaction-info-dialog/transaction-info-dialog.component';

@Component({
  selector: 'app-daily-spending',
  templateUrl: './daily-spending.component.html',
  styleUrls: ['./daily-spending.component.scss']
})
export class DailySpendingComponent implements OnInit {

  budget: Budget[] = []
  transactions?: Transaction[] = []

  constructor(private dataService: DataService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getBudget()
    this.getDailyTransactions()
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

  getDailyTransactions(){
    this.dataService.getDailyTransactions().subscribe(transactions => {
      this.transactions = transactions
    })
  }

  getTransactionInfo(transaction: Transaction){
    const dialogRef = this.dialog.open(TransactionInfoDialogComponent, {
      data: { transaction: transaction }
    });    
  }

}
