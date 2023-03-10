import { Observable } from "rxjs"
import { Timestamp } from '@angular/fire/firestore'

 export interface Budget {
    id?: string
    name: string
    amount: number
    free: number
 }

 export interface Transaction {
    id?: string
    amount: number
    category: string
    typeOfSpending: string // Daily / Monthly / Income
    posting: boolean
    date: Timestamp
    comment?: string
 }

 export interface DataService {
    addBudget(budget: Budget): Promise<void>
    updateBudget(budget: Budget): Promise<void>
    deleteBudget(id:string): Promise<void>
    getBudget(): Observable<Budget>

    updateBudgetByTransaction(transaction: Transaction): Promise<void> // add transaction
    updateTransaction(transaction: Transaction): Promise<void>
    deleteTransaction(id:string): Promise<void>
    getTransactions(): Observable<Transaction[]>
 }

 export interface user{
   login: string,
   password: string
}

export interface PageData {
   title: string;
 }