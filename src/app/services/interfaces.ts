import { Observable } from "rxjs"

 export interface Budget {
    //id?: string
    name: string
    amount: number
 }


 // TODO: replace id to some name
 export interface Transaction {
    id?: string
    amount: number
    category: string
    tyoeOfSpending: string
    date: Date
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

 export interface DailySpending {
    id?: string
    amount: number
    date: Date
 }

 export interface MonthlySpending { 
    id?: string
    amount: number
    month: Date
 }

 export interface Incomes {
    id?: string
    amount: string
    date: Date
    category: string
    comment?: string
 }