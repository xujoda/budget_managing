import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { MatDialog } from '@angular/material/dialog'
import { BudgetCreatingDialogComponent } from '../budget-creating-dialog/budget-creating-dialog.component';
import { Budget, Transaction } from 'src/app/services/interfaces';
import { TransactionCreatingDialogComponent } from '../transaction-creating-dialog/transaction-creating-dialog.component';
import { DeleteBudgetByNameDialogComponent } from '../delete-budget-by-name-dialog/delete-budget-by-name-dialog.component';
import { sortedChanges } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  budget:Budget[] = []
  transactions?: Transaction[] = []

  constructor(private dataService: DataService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getBudget()
    this.getTransactions()
  }

  openBudgetCreatingDialog(){
    const dialogRef = this.dialog.open(BudgetCreatingDialogComponent)

    dialogRef.afterClosed().subscribe(result => {
      if (result){
        this.dataService.addBudget(result)
      }
    })
  }

  getBudget(){
    this.dataService.getBudget().subscribe(budget => {
      this.budget = budget
    })
    
    this.dataService.getTransactions().subscribe(transactions => this.transactions = transactions)
  }

  openBudgetDeleteByNameDialog(){
    const dialogRef = this.dialog.open(DeleteBudgetByNameDialogComponent)

    dialogRef.afterClosed().subscribe(budgetName => {
      if (budgetName){
        this.dataService.deleteBudgetByName(budgetName)
      }
    })
  }

  openTransactionCreatingDialog(){
    const dialogRef = this.dialog.open(TransactionCreatingDialogComponent)

    dialogRef.afterClosed().subscribe(result => {
      if (result){
        this.dataService.updateBudgetByTransaction(this.budget[0],result)
      }
    })
  }  

  getTransactions(){
    this.dataService.getTransactions().subscribe(transactions => {
      this.transactions = transactions
    })
    this.transactions?.sort((a:any,b:any)=> a - b)
  }
}
