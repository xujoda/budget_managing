import { Observable } from "rxjs"
import { Timestamp } from '@angular/fire/firestore'

 export interface Budget {
    id?: string
    name: string
    amount: number
 }

 export interface Transaction {
    id?: string
    amount: number
    category: string
    typeOfSpending: string
    date: Timestamp
    comment?: string
 }

 export interface DataService {
    addBudget(budget: Budget): Promise<void>
    updateBudget(budget: Budget): Promise<void>
    deleteBudget(id:string): Promise<void>
    getBudget(): Observable<Budget>

    addTransaction(transaction: Transaction): Promise<void>
    updateTransaction(transaction: Transaction): Promise<void>
    deleteTransaction(id:string): Promise<void>
    getTransactions(): Observable<Transaction[]>
 }


 export interface Incomes {
    id?: string
    amount: string
    date: Date
    category: string
    comment?: string
 }

 export interface user{
   login: string,
   password: string
}