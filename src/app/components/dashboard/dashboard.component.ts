import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { MatDialog } from '@angular/material/dialog'
import { BudgetCreatingDialogComponent } from '../budget-creating-dialog/budget-creating-dialog.component';
import { Budget } from 'src/app/services/interfaces';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  budget:Budget[] = []
  transactions?: any[]

  constructor(private dataService: DataService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getBudget()
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
      this.budget = budget,
      console.log(budget[0])
    })
    
    this.dataService.getTransactions().subscribe(transactions => this.transactions = transactions)
  }

  deleteBudget(){
    this.dataService.deleteBudgetByName("main")
  }


}
