import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore'
import { Console } from 'console';
import { off } from 'process';
import { Observable, map, of } from 'rxjs';
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

   addBudget (budget:Budget): Promise<string>{
    return this.budgetsCollection.add(budget)
      .then(budgetRef => budgetRef.id)
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

   deleteBudgetByName(name: string) {
    const query = this.firestore.collection<Budget>('budgets', ref => ref.where('name', '==', name));
    query.get().subscribe(querySnapshot => {
      querySnapshot.forEach(doc => {
        doc.ref.delete();
      });
    });
  }

   // TODO: replace id to some name
   deleteTransaction(id:string){
    const transactionDoc: AngularFirestoreDocument<Transaction> = this.firestore.doc('transactions/${id}')
    transactionDoc.delete()
   }

   getBudget(): Observable<Budget[]> {
    return this.firestore.collection<Budget>('budgets').valueChanges()
  }

   getTransactions(): Observable<Transaction[]>{
    return this.firestore.collection<Transaction>('transactions').valueChanges()
   }
}
