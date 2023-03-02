import { Observable } from "rxjs"

 export interface Budget {
    id?: string
    amount: number
    category: string
    month: Date
 }

 export interface Transaction {
    id?: string
    amount: number
    category: string
    date: Date
    type: string
 }

 export interface DataService {
    addBudget(budget: Budget): Promise<void>
    updateBudget(budget: Budget): Promise<void>
    deleteBudget(id:string): Promise<void>
    getBudget(): Observable<Budget[]>

    addTransaction(transaction: Transaction): Promise<void>
    updateTransaction(transaction: Transaction): Promise<void>
    deleteTransaction(id:string): Promise<void>
    getTransactions(): Observable<Transaction[]>
 }