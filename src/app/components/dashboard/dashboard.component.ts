import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  budget?:any[]
  transactions?: any[]

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getBudget().subscribe(budget => this.budget = budget)
    this.dataService.getTransactions().subscribe(transactions => this.transactions = transactions)
  }

  

}
