import { Timestamp } from '@angular/fire/firestore'

 export interface Budget {
    id?: string
    name: string
    amount: number
    free: number
 }

 export interface Transaction {
    budgetName: string
    amount: number
    category: string
    typeOfSpending: string // Daily / Monthly / Income
    posting: boolean
    date: Timestamp
    comment?: string
 }

 export interface user{
   login: string,
   password: string
}

export interface PageData {
   title: string;
 }