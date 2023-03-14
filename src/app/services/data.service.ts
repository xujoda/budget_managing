import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore'
import { Observable } from 'rxjs';
import { Budget, Transaction } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  budgetID:string = 'QDybuGcp83ghKCh0JOu2'

  private budgetsCollection: AngularFirestoreCollection<Budget>
  budgets: Observable<Budget[]>
  
  private transactionsCollection: AngularFirestoreCollection<Transaction>
  transactions: Observable<Transaction[]>

  constructor(private firestore: AngularFirestore) {
    this.budgetsCollection = this.firestore.collection<Budget>('budgets')
    this.budgets = this.budgetsCollection.valueChanges({idField:'id'})
    this.transactionsCollection = this.firestore.collection<Transaction>('transactions')
    this.transactions = this.transactionsCollection.valueChanges({idField:'id'})
   }

   addBudget (budget:Budget){
    this.budgetsCollection.add(budget)
  }

   addTransaction(transaction:Transaction){
    this.transactionsCollection.add(transaction)
   }

   updateBudgetByTransaction(budget:Budget, transaction:Transaction){
    this.addTransaction(transaction)
    const typeOfSpending = transaction.typeOfSpending
    const posting = transaction.posting
    if (typeOfSpending === 'Income') 
      {
        budget.amount += transaction.amount
        budget.free += transaction.amount
      }
    if (typeOfSpending === 'Daily')
      {
        budget.amount -= transaction.amount
        budget.free -= transaction.amount
      }
    if (typeOfSpending === 'Monthly')
      {
        if (posting)
        {
          transaction.posting = true
          transaction.typeOfSpending = 'Daily'
          this.updateBudgetByTransaction(budget,transaction)
        }
        else 
        {
          budget.amount -= transaction.amount
        }
      }
    this.updateBudget(budget)
   }

   updateBudgetByPostTransaction(budget:Budget, transaction:Transaction){
    transaction.typeOfSpending = 'Daily'
    budget.amount -= transaction.amount
    this.updateBudget(budget)
    this.updateBudgetByTransaction(budget,transaction)
   }

   updateBudget(budget: Budget){
    const budgetDoc: AngularFirestoreDocument<Budget> = this.firestore.doc(`budgets/${this.budgetID}`);
    budgetDoc.update(budget)
   }

   updateTransaction(transaction:Transaction){
    const transactionDoc: AngularFirestoreDocument<Transaction> = this.firestore.doc(`transactions/${transaction.id}`)
    transactionDoc.update(transaction)
   }

   deleteBudgetByName(name: string) {
    const query = this.firestore.collection<Budget>('budgets', ref => ref.where('name', '==', name));
    query.get().subscribe(querySnapshot => {
      querySnapshot.forEach(doc => {
        doc.ref.delete();
      });
    });
  }
  
  // TODO: replace id to something else for deleting
   deleteTransaction(id:string){
    const transactionDoc: AngularFirestoreDocument<Transaction> = this.firestore.doc('transactions/${id}')
    transactionDoc.delete()
   }

   getBudget(): Observable<Budget[]> {    
    return this.firestore.collection<Budget>('budgets').valueChanges()
  }

   getAllTransactions(): Observable<Transaction[]>{
    return this.firestore.collection<Transaction>('transactions', ref => ref
    .orderBy('date', 'desc')
    ).valueChanges();
   }

   getDailyTransactions(): Observable<Transaction[]>{
    return this.firestore.collection<Transaction>('transactions', ref => ref
    .where('typeOfSpending','==','Daily')
    .orderBy('date','desc')
    ).valueChanges();
   }

   getIncomesTransactions(): Observable<Transaction[]>{
    return this.firestore.collection<Transaction>('transactions', ref => ref
    .where('typeOfSpending','==','Income')
    .orderBy('date','desc')
    ).valueChanges();
   }

   getMonthlyTransactions(): Observable<Transaction[]>{
    return this.firestore.collection<Transaction>('transactions', ref => ref
    .where('typeOfSpending','==','Monthly')
    .orderBy('date','desc')
    ).valueChanges();
   }
}
