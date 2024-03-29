import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IncomesListComponent } from './components/incomes-list/incomes-list.component';
import { DailySpendingComponent } from './components/daily-spending/daily-spending.component';
import { MonhtlySpendingComponent } from './components/monhtly-spending/monhtly-spending.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FullFreeBalanceComponent } from './components/full-free-balance/full-free-balance.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { NavigationComponent } from './components/navigation/navigation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';

import { AngularFireModule } from '@angular/fire/compat/';
import {AuthGuardModule} from '@angular/fire/auth-guard'
// import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
// import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
// import { provideAuth,getAuth } from '@angular/fire/auth';
// import { provideDatabase,getDatabase } from '@angular/fire/database';
// import { provideFirestore,getFirestore } from '@angular/fire/firestore';
// import { provideFunctions,getFunctions } from '@angular/fire/functions';
// import { provideMessaging,getMessaging } from '@angular/fire/messaging';
// import { providePerformance,getPerformance } from '@angular/fire/performance';
// import { provideRemoteConfig,getRemoteConfig } from '@angular/fire/remote-config';
// import { provideStorage,getStorage } from '@angular/fire/storage'

import { MatInputModule } from '@angular/material/input'
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker'
import { BudgetCreatingDialogComponent } from './components/budget-creating-dialog/budget-creating-dialog.component'
import { MatDialogModule } from '@angular/material/dialog';
import { TransactionCreatingDialogComponent } from './components/transaction-creating-dialog/transaction-creating-dialog.component';
import { MatNativeDateModule } from '@angular/material/core';
import { DeleteBudgetByNameDialogComponent } from './components/delete-budget-by-name-dialog/delete-budget-by-name-dialog.component';
import {MatSelectModule} from '@angular/material/select'
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TransactionInfoDialogComponent } from './components/transaction-info-dialog/transaction-info-dialog.component'

@NgModule({
  declarations: [
    AppComponent,
    IncomesListComponent,
    DailySpendingComponent,
    MonhtlySpendingComponent,
    DashboardComponent,
    LoginComponent,
    FullFreeBalanceComponent,
    NavigationComponent,
    BudgetCreatingDialogComponent,
    TransactionCreatingDialogComponent,
    DeleteBudgetByNameDialogComponent,
    TransactionInfoDialogComponent
    ],
  imports: [
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    BrowserModule,
    AuthGuardModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,

    AngularFireModule.initializeApp(environment.firebase),
    // provideFirebaseApp(() => initializeApp(environment.firebase)),
    // // provideAnalytics(() => getAnalytics()),
    // provideAuth(() => getAuth()),
    // provideDatabase(() => getDatabase()),
    // provideFirestore(() => getFirestore()),
    // provideFunctions(() => getFunctions()),
    // provideMessaging(() => getMessaging()),
    // providePerformance(() => getPerformance()),
    // provideRemoteConfig(() => getRemoteConfig()),
    // provideStorage(() => getStorage()),
    
  ],
  providers: [
    // ScreenTrackingService,UserTrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
