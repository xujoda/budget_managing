import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore'
import { Observable } from 'rxjs';
import { Budget, Transaction } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  budgetID:string = '6HzvENde9qnvoBNLnPzy'

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

   // TODO: replace id to some name
   deleteTransaction(id:string){
    const transactionDoc: AngularFirestoreDocument<Transaction> = this.firestore.doc('transactions/${id}')
    transactionDoc.delete()
   }

   getBudget(): Observable<Budget[]> {    
    return this.firestore.collection<Budget>('budgets').valueChanges()
  }

  // TODO: create query for sorting transactions || sort returned collection
   getTransactions(): Observable<Transaction[]>{
    //const q = query(transactionsRef, orderBy("date"), limit(10));
    return this.firestore.collection<Transaction>('transactions').valueChanges()
   }
}
