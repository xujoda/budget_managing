import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore'
import { Observable } from 'rxjs';
import { Budget, Transaction } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

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

   updateBudget(budget: Budget){
    const budgetDoc: AngularFirestoreDocument<Budget> = this.firestore.doc('budgets/${budget.id}')
    budgetDoc.update(budget)
   }

   updateTransaction(transaction:Transaction){
    const transactionDoc: AngularFirestoreDocument<Transaction> = this.firestore.doc('transactions/${transaction.id}')
    transactionDoc.update(transaction)
   }

   deleteBudget(id:string){
    const budgetDoc: AngularFirestoreDocument<Budget> = this.firestore.doc('budgets/${id}')
    budgetDoc.delete()
   }

   deleteTransaction(id:string){
    const transactionDoc: AngularFirestoreDocument<Transaction> = this.firestore.doc('transactions/${id}')
    transactionDoc.delete()
   }

   getBudget(): Observable<Budget[]>{
    return this.firestore.collection<Budget>('budget').valueChanges()
   }

   getTransactions(): Observable<Transaction[]>{
    return this.firestore.collection<Transaction>('transaction').valueChanges()
   }
}
