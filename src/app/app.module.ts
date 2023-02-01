import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IncomesListComponent } from './components/incomes-list/incomes-list.component';
import { DailySpendingComponent } from './components/daily-spending/daily-spending.component';
import { MonhtlySpendingComponent } from './components/monhtly-spending/monhtly-spending.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FullFreeBalanceComponent } from './components/full-free-balance/full-free-balance.component';
import { AuthorizationComponent } from './components/authorization/authorization.component';

@NgModule({
  declarations: [
    AppComponent,
    IncomesListComponent,
    DailySpendingComponent,
    MonhtlySpendingComponent,
    DashboardComponent,
    FullFreeBalanceComponent,
    AuthorizationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
