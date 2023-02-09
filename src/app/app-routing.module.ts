import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DailySpendingComponent } from './components/daily-spending/daily-spending.component';
import { FullFreeBalanceComponent } from './components/full-free-balance/full-free-balance.component';
import { IncomesListComponent } from './components/incomes-list/incomes-list.component';
import { MonhtlySpendingComponent } from './components/monhtly-spending/monhtly-spending.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './services/auth.guard';

//TODO: Setting AuthGuard

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'daily', component: DailySpendingComponent},// canActivate: [AuthGuard]},
  {path: 'monthly', component: MonhtlySpendingComponent},// canActivate: [AuthGuard]},
  {path: 'balance', component: FullFreeBalanceComponent},// canActivate: [AuthGuard]},
  {path: 'incomes', component: IncomesListComponent},// canActivate: [AuthGuard]},
  {path: 'dashboard', component: DashboardComponent},// canActivate: [AuthGuard]},
  {path: '**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
