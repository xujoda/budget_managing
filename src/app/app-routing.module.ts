import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DailySpendingComponent } from './components/daily-spending/daily-spending.component';
import { FullFreeBalanceComponent } from './components/full-free-balance/full-free-balance.component';
import { IncomesListComponent } from './components/incomes-list/incomes-list.component';
import { MonhtlySpendingComponent } from './components/monhtly-spending/monhtly-spending.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AuthGuard } from './services/auth/auth.guard';

interface PageData {
  title: string;
}

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent, data: {title: 'Authorization'}},
  {path: 'daily', component: DailySpendingComponent, canActivate: [AuthGuard], data: {title: 'Daily Sendings'} as PageData},
  {path: 'monthly', component: MonhtlySpendingComponent, canActivate: [AuthGuard], data: {title: 'Monthly Spendings'} as PageData},
  {path: 'balance', component: FullFreeBalanceComponent, canActivate: [AuthGuard], data: {title: 'Balance'} as PageData},
  {path: 'incomes', component: IncomesListComponent, canActivate: [AuthGuard], data: {title: 'Incomes'} as PageData},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard], data: {title: 'Dashboard'} as PageData},
  {path: '**', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
