import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore'
import { QuerySnapshot } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Budget, Transaction } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  budgetID:string = 'mJlHmUsbRkmyp9pKxRWo'

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
          budget.amount -= 2*transaction.amount
          budget.free -= transaction.amount
          this.addTransaction(transaction)
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
    transaction.posting = true
    budget.amount -= transaction.amount
    budget.free -= transaction.amount
    this.updateBudget(budget)
   }

   updateBudget(budget: Budget){
    const query = this.firestore.collection<Budget>('budgets', ref => ref.where('name', '==', budget.name))
    query.get().subscribe(querySnapshot => {
      querySnapshot.forEach(doc =>{
        doc.ref.update(budget)
      })
    })

   }

   deleteBudgetByName(name: string) {
    const query = this.firestore.collection<Budget>('budgets', ref => ref.where('name', '==', name))
    query.get().subscribe(querySnapshot => {
      querySnapshot.forEach(doc => {
        doc.ref.delete()
      })
    })
    this.deleteAllTransactionsByBudget(name)
  }

  deleteAllTransactionsByBudget(name:string){
    const query = this.firestore.collection<Transaction>('transactions', ref => ref
    .where('budgetName', '==',name)
    )
    query.get().subscribe(QuerySnapshot => {
      QuerySnapshot.forEach(doc =>{
        doc.ref.delete()
      })
    })
  }
  
   deleteTransaction(transaction:Transaction, budget:Budget){
    const query = this.firestore.collection<Transaction>('transactions', ref => ref
    .where('budgetName', '==',transaction.budgetName)
    .where('date', '==',transaction.date)
    .where('category', '==',transaction.category)
    .where('comment', '==',transaction.comment)
    .where('amount', '==',transaction.amount)
    .where('posting', '==',transaction.posting)
    .where('typeOfSpending', '==',transaction.typeOfSpending)
    )
    query.get().subscribe(QuerySnapshot => {
      QuerySnapshot.forEach(doc =>{
        doc.ref.delete()
      })
    })
    if (transaction.typeOfSpending === 'Income')
    {
        budget.amount -= transaction.amount
        budget.free -= transaction.amount
    }
    else 
    {
        budget.amount += transaction.amount
        if (transaction.typeOfSpending === 'Daily')
          budget.free += transaction.amount
    }
    this.updateBudget(budget)
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

   getDailyTransactionsByDate(today:Date): Observable<Transaction[]>{
    return this.firestore.collection<Transaction>('transactions', ref => ref
    .where('date','==',today)
    .where('typeOfSpending','==','Daily')
    .orderBy('date','desc')
    ).valueChanges();
   }

   getMonthlyTransactionsByDate(month:Date): Observable<Transaction[]>{
    const monthOfFilter = month.getMonth()
    return this.firestore.collection<Transaction>('transactions', ref => ref
    .where('date','==',monthOfFilter)
    .where('typeOfSpending','==','Monthly')
    .orderBy('date','desc')
    ).valueChanges();
   }
}
