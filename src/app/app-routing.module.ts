import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DailySpendingComponent } from './components/daily-spending/daily-spending.component';
import { FullFreeBalanceComponent } from './components/full-free-balance/full-free-balance.component';
import { IncomesListComponent } from './components/incomes-list/incomes-list.component';
import { MonhtlySpendingComponent } from './components/monhtly-spending/monhtly-spending.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'daily', component: DailySpendingComponent, canActivate: [AuthGuard]},
  {path: 'monthly', component: MonhtlySpendingComponent, canActivate: [AuthGuard]},
  {path: 'balance', component: FullFreeBalanceComponent, canActivate: [AuthGuard]},
  {path: 'incomes', component: IncomesListComponent, canActivate: [AuthGuard]},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: '**', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
